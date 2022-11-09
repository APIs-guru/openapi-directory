import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextExtractionModelMetadata
/** 
 * Model metadata that is specific to text extraction.
**/
export class TextExtractionModelMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=modelHint" })
  modelHint?: string;
}
