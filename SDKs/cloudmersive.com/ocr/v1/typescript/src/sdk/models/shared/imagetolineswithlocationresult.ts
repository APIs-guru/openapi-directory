import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OcrLineElement } from "./ocrlineelement";



// ImageToLinesWithLocationResult
/** 
 * Result of an image to lines-with-location OCR operation
**/
export class ImageToLinesWithLocationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Lines", elemType: OcrLineElement })
  lines?: OcrLineElement[];

  @SpeakeasyMetadata({ data: "json, name=Successful" })
  successful?: boolean;
}
