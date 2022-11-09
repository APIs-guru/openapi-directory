import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OcrPageResultWithWordsWithLocation } from "./ocrpageresultwithwordswithlocation";


// PdfToWordsWithLocationResult
/** 
 * Response from an OCR to words with location operation.  Includes the confience rating and converted text result, along with the locations of the words in the pages.
**/
export class PdfToWordsWithLocationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=OcrPages", elemType: shared.OcrPageResultWithWordsWithLocation })
  ocrPages?: OcrPageResultWithWordsWithLocation[];

  @Metadata({ data: "json, name=Successful" })
  successful?: boolean;
}
