import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
/**
 * Annotation details for video object tracking.
**/
export declare class VideoObjectTrackingAnnotation extends SpeakeasyBase {
    boundingBox?: BoundingPoly;
    instanceId?: string;
    score?: number;
    timeOffset?: string;
}
