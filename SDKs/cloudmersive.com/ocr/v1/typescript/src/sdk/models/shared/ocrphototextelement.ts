import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Point } from "./point";



// OcrPhotoTextElement
/** 
 * A single text in an OCR document
**/
export class OcrPhotoTextElement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BoundingPoints", elemType: Point })
  boundingPoints?: Point[];

  @SpeakeasyMetadata({ data: "json, name=ConfidenceLevel" })
  confidenceLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=Height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=Text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=Width" })
  width?: number;

  @SpeakeasyMetadata({ data: "json, name=XLeft" })
  xLeft?: number;

  @SpeakeasyMetadata({ data: "json, name=YTop" })
  yTop?: number;
}
