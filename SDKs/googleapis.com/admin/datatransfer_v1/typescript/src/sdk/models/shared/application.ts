import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationTransferParam } from "./applicationtransferparam";



// Application
/** 
 * Application resources represent applications installed on the domain that support transferring ownership of user data.
**/
export class Application extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=transferParams", elemType: ApplicationTransferParam })
  transferParams?: ApplicationTransferParam[];
}
