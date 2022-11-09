import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OcrWordElement } from "./ocrwordelement";


// ImageToWordsWithLocationResult
/** 
 * Result of an image to words-with-location OCR operation
**/
export class ImageToWordsWithLocationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Successful" })
  successful?: boolean;

  @Metadata({ data: "json, name=Words", elemType: shared.OcrWordElement })
  words?: OcrWordElement[];
}
