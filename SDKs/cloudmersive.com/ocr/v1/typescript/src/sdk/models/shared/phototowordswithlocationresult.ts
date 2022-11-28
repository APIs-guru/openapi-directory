import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OcrPhotoTextElement } from "./ocrphototextelement";



// PhotoToWordsWithLocationResult
/** 
 * Result of an photo to words-with-location OCR operation
**/
export class PhotoToWordsWithLocationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DiagnosticImage" })
  diagnosticImage?: string;

  @SpeakeasyMetadata({ data: "json, name=Successful" })
  successful?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TextElements", elemType: OcrPhotoTextElement })
  textElements?: OcrPhotoTextElement[];
}
