import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentMetadata
/** 
 * Information about the input document.
**/
export class DocumentMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Pages" })
  pages?: number;
}
