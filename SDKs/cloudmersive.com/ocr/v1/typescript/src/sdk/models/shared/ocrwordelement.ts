import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OcrWordElement
/** 
 * A single word in an OCR document
**/
export class OcrWordElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BlockNumber" })
  blockNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=ConfidenceLevel" })
  confidenceLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=Height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=LineNumber" })
  lineNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=PageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=ParagraphNumber" })
  paragraphNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=Width" })
  width?: number;

  @SpeakeasyMetadata({ data: "json, name=WordNumber" })
  wordNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=WordText" })
  wordText?: string;

  @SpeakeasyMetadata({ data: "json, name=XLeft" })
  xLeft?: number;

  @SpeakeasyMetadata({ data: "json, name=YTop" })
  yTop?: number;
}
