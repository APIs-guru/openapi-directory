import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OcrLineElement } from "./ocrlineelement";


// ImageToLinesWithLocationResult
/** 
 * Result of an image to lines-with-location OCR operation
**/
export class ImageToLinesWithLocationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Lines", elemType: shared.OcrLineElement })
  lines?: OcrLineElement[];

  @Metadata({ data: "json, name=Successful" })
  successful?: boolean;
}
