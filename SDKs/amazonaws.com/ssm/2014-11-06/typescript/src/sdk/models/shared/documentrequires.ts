import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentRequires
/** 
 * An SSM document required by the current document.
**/
export class DocumentRequires extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
