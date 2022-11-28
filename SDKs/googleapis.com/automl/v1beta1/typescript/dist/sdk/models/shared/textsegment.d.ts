import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding.
**/
export declare class TextSegment extends SpeakeasyBase {
    content?: string;
    endOffset?: string;
    startOffset?: string;
}
