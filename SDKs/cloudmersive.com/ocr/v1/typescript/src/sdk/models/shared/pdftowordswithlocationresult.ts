import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OcrPageResultWithWordsWithLocation } from "./ocrpageresultwithwordswithlocation";



// PdfToWordsWithLocationResult
/** 
 * Response from an OCR to words with location operation.  Includes the confience rating and converted text result, along with the locations of the words in the pages.
**/
export class PdfToWordsWithLocationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OcrPages", elemType: OcrPageResultWithWordsWithLocation })
  ocrPages?: OcrPageResultWithWordsWithLocation[];

  @SpeakeasyMetadata({ data: "json, name=Successful" })
  successful?: boolean;
}
