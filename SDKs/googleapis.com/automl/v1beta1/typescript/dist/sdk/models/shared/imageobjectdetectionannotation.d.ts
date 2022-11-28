import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
/**
 * Annotation details for image object detection.
**/
export declare class ImageObjectDetectionAnnotation extends SpeakeasyBase {
    boundingBox?: BoundingPoly;
    score?: number;
}
