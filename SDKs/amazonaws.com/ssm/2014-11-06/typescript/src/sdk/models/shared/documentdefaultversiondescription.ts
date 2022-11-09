import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DocumentDefaultVersionDescription
/** 
 * A default version of a document.
**/
export class DocumentDefaultVersionDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultVersion" })
  defaultVersion?: string;

  @Metadata({ data: "json, name=DefaultVersionName" })
  defaultVersionName?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
