import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DocumentRequires
/** 
 * An SSM document required by the current document.
**/
export class DocumentRequires extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
