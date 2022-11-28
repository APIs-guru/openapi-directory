import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OcrWordElement } from "./ocrwordelement";



// OcrPageResultWithWordsWithLocation
/** 
 * OCR results of a page, including words of text and their location
**/
export class OcrPageResultWithWordsWithLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=Successful" })
  successful?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Words", elemType: OcrWordElement })
  words?: OcrWordElement[];
}
