import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OcrWordElement } from "./ocrwordelement";



// ImageToWordsWithLocationResult
/** 
 * Result of an image to words-with-location OCR operation
**/
export class ImageToWordsWithLocationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Successful" })
  successful?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Words", elemType: OcrWordElement })
  words?: OcrWordElement[];
}
