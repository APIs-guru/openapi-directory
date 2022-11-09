import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OcrWordElement
/** 
 * A single word in an OCR document
**/
export class OcrWordElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=BlockNumber" })
  blockNumber?: number;

  @Metadata({ data: "json, name=ConfidenceLevel" })
  confidenceLevel?: number;

  @Metadata({ data: "json, name=Height" })
  height?: number;

  @Metadata({ data: "json, name=LineNumber" })
  lineNumber?: number;

  @Metadata({ data: "json, name=PageNumber" })
  pageNumber?: number;

  @Metadata({ data: "json, name=ParagraphNumber" })
  paragraphNumber?: number;

  @Metadata({ data: "json, name=Width" })
  width?: number;

  @Metadata({ data: "json, name=WordNumber" })
  wordNumber?: number;

  @Metadata({ data: "json, name=WordText" })
  wordText?: string;

  @Metadata({ data: "json, name=XLeft" })
  xLeft?: number;

  @Metadata({ data: "json, name=YTop" })
  yTop?: number;
}
