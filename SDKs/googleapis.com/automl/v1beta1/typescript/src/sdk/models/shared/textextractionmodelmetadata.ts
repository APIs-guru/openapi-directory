import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextExtractionModelMetadata
/** 
 * Model metadata that is specific to text extraction.
**/
export class TextExtractionModelMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=modelHint" })
  modelHint?: string;
}
