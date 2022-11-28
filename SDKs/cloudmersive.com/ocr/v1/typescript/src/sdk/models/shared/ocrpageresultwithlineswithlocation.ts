import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OcrLineElement } from "./ocrlineelement";



// OcrPageResultWithLinesWithLocation
/** 
 * OCR results of a page, including lines of text and their location
**/
export class OcrPageResultWithLinesWithLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Lines", elemType: OcrLineElement })
  lines?: OcrLineElement[];

  @SpeakeasyMetadata({ data: "json, name=PageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=Successful" })
  successful?: boolean;
}
