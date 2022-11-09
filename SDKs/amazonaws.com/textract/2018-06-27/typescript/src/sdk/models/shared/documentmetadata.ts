import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DocumentMetadata
/** 
 * Information about the input document.
**/
export class DocumentMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=Pages" })
  pages?: number;
}
