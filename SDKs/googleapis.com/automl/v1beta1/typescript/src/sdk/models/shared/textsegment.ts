import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TextSegment
/** 
 * A contiguous part of a text (string), assuming it has an UTF-8 NFC encoding.
**/
export class TextSegment extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=endOffset" })
  endOffset?: string;

  @Metadata({ data: "json, name=startOffset" })
  startOffset?: string;
}
