import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TextSegment
/** 
 * A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding.
**/
export class TextSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=endOffset" })
  endOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=startOffset" })
  startOffset?: string;
}
