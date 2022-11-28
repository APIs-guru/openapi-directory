import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";



// ImageObjectDetectionAnnotation
/** 
 * Annotation details for image object detection.
**/
export class ImageObjectDetectionAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
