import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationTransferParam } from "./applicationtransferparam";


// Application
/** 
 * Applications resources represent applications installed on the domain that support transferring ownership of user data.
**/
export class Application extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=transferParams", elemType: shared.ApplicationTransferParam })
  transferParams?: ApplicationTransferParam[];
}
