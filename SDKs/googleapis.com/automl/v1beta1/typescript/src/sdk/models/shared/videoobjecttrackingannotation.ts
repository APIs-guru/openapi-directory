import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";



// VideoObjectTrackingAnnotation
/** 
 * Annotation details for video object tracking.
**/
export class VideoObjectTrackingAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=timeOffset" })
  timeOffset?: string;
}
