import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentDefaultVersionDescription
/** 
 * A default version of a document.
**/
export class DocumentDefaultVersionDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultVersion" })
  defaultVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultVersionName" })
  defaultVersionName?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
