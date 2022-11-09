import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OcrPhotoTextElement } from "./ocrphototextelement";


// PhotoToWordsWithLocationResult
/** 
 * Result of an photo to words-with-location OCR operation
**/
export class PhotoToWordsWithLocationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=DiagnosticImage" })
  diagnosticImage?: string;

  @Metadata({ data: "json, name=Successful" })
  successful?: boolean;

  @Metadata({ data: "json, name=TextElements", elemType: shared.OcrPhotoTextElement })
  textElements?: OcrPhotoTextElement[];
}
