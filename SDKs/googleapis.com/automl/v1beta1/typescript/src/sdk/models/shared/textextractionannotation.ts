import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextSegment } from "./textsegment";



// TextExtractionAnnotation
/** 
 * Annotation for identifying spans of text.
**/
export class TextExtractionAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=textSegment" })
  textSegment?: TextSegment;
}
