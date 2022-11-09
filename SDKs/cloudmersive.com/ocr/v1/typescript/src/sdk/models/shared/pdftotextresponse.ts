import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OcrPageResult } from "./ocrpageresult";


// PdfToTextResponse
/** 
 * Response from an OCR to text operation.  Includes the confidence rating and converted text result.
**/
export class PdfToTextResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=OcrPages", elemType: shared.OcrPageResult })
  ocrPages?: OcrPageResult[];

  @Metadata({ data: "json, name=Successful" })
  successful?: boolean;
}
