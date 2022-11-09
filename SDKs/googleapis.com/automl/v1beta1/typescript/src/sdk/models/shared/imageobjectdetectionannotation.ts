import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BoundingPoly } from "./boundingpoly";


// ImageObjectDetectionAnnotation
/** 
 * Annotation details for image object detection.
**/
export class ImageObjectDetectionAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingPoly;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
