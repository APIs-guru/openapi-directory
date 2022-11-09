import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OcrWordElement } from "./ocrwordelement";


// OcrPageResultWithWordsWithLocation
/** 
 * OCR results of a page, including words of text and their location
**/
export class OcrPageResultWithWordsWithLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=PageNumber" })
  pageNumber?: number;

  @Metadata({ data: "json, name=Successful" })
  successful?: boolean;

  @Metadata({ data: "json, name=Words", elemType: shared.OcrWordElement })
  words?: OcrWordElement[];
}
