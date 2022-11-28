import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OcrWordElement } from "./ocrwordelement";



// OcrLineElement
/** 
 * A contiguous line of text in an OCR document
**/
export class OcrLineElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LineText" })
  lineText?: string;

  @SpeakeasyMetadata({ data: "json, name=Words", elemType: OcrWordElement })
  words?: OcrWordElement[];
}
