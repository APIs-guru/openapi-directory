import { SpeakeasyBase } from "../../../internal/utils";
import { TextSegment } from "./textsegment";
/**
 * Annotation for identifying spans of text.
**/
export declare class TextExtractionAnnotation extends SpeakeasyBase {
    score?: number;
    textSegment?: TextSegment;
}
