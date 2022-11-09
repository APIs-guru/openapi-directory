import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OcrWordElement } from "./ocrwordelement";


// OcrLineElement
/** 
 * A contiguous line of text in an OCR document
**/
export class OcrLineElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=LineText" })
  lineText?: string;

  @Metadata({ data: "json, name=Words", elemType: shared.OcrWordElement })
  words?: OcrWordElement[];
}
