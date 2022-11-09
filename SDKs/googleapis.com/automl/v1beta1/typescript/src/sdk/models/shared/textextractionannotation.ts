import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextSegment } from "./textsegment";


// TextExtractionAnnotation
/** 
 * Annotation for identifying spans of text.
**/
export class TextExtractionAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=textSegment" })
  textSegment?: TextSegment;
}
