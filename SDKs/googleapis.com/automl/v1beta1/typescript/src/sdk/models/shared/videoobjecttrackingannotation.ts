import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BoundingPoly } from "./boundingpoly";


// VideoObjectTrackingAnnotation
/** 
 * Annotation details for video object tracking.
**/
export class VideoObjectTrackingAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingBox" })
  boundingBox?: BoundingPoly;

  @Metadata({ data: "json, name=instanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=timeOffset" })
  timeOffset?: string;
}
