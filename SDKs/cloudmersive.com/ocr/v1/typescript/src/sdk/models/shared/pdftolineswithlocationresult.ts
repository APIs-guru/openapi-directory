import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OcrPageResultWithLinesWithLocation } from "./ocrpageresultwithlineswithlocation";



// PdfToLinesWithLocationResult
/** 
 * Response from an OCR to lines with location operation.  Includes the confience rating and converted text result, along with the locations of the lines in the pages.
**/
export class PdfToLinesWithLocationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OcrPages", elemType: OcrPageResultWithLinesWithLocation })
  ocrPages?: OcrPageResultWithLinesWithLocation[];

  @SpeakeasyMetadata({ data: "json, name=Successful" })
  successful?: boolean;
}
