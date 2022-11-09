import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OcrPageResultWithLinesWithLocation } from "./ocrpageresultwithlineswithlocation";


// PdfToLinesWithLocationResult
/** 
 * Response from an OCR to lines with location operation.  Includes the confience rating and converted text result, along with the locations of the lines in the pages.
**/
export class PdfToLinesWithLocationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=OcrPages", elemType: shared.OcrPageResultWithLinesWithLocation })
  ocrPages?: OcrPageResultWithLinesWithLocation[];

  @Metadata({ data: "json, name=Successful" })
  successful?: boolean;
}
