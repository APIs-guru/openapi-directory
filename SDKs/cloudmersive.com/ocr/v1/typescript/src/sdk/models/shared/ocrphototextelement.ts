import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Point } from "./point";


// OcrPhotoTextElement
/** 
 * A single text in an OCR document
**/
export class OcrPhotoTextElement extends SpeakeasyBase {
  @Metadata({ data: "json, name=BoundingPoints", elemType: shared.Point })
  boundingPoints?: Point[];

  @Metadata({ data: "json, name=ConfidenceLevel" })
  confidenceLevel?: number;

  @Metadata({ data: "json, name=Height" })
  height?: number;

  @Metadata({ data: "json, name=Text" })
  text?: string;

  @Metadata({ data: "json, name=Width" })
  width?: number;

  @Metadata({ data: "json, name=XLeft" })
  xLeft?: number;

  @Metadata({ data: "json, name=YTop" })
  yTop?: number;
}
