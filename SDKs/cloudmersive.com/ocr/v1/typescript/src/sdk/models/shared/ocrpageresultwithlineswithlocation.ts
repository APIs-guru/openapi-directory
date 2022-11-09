import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OcrLineElement } from "./ocrlineelement";


// OcrPageResultWithLinesWithLocation
/** 
 * OCR results of a page, including lines of text and their location
**/
export class OcrPageResultWithLinesWithLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Lines", elemType: shared.OcrLineElement })
  lines?: OcrLineElement[];

  @Metadata({ data: "json, name=PageNumber" })
  pageNumber?: number;

  @Metadata({ data: "json, name=Successful" })
  successful?: boolean;
}
