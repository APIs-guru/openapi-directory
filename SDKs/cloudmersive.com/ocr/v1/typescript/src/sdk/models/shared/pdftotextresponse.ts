import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OcrPageResult } from "./ocrpageresult";



// PdfToTextResponse
/** 
 * Response from an OCR to text operation.  Includes the confidence rating and converted text result.
**/
export class PdfToTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OcrPages", elemType: OcrPageResult })
  ocrPages?: OcrPageResult[];

  @SpeakeasyMetadata({ data: "json, name=Successful" })
  successful?: boolean;
}
