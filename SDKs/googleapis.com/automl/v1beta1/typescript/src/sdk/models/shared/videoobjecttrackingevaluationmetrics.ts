import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingBoxMetricsEntry } from "./boundingboxmetricsentry";



// VideoObjectTrackingEvaluationMetrics
/** 
 * Model evaluation metrics for video object tracking problems. Evaluates prediction quality of both labeled bounding boxes and labeled tracks (i.e. series of bounding boxes sharing same label and instance ID).
**/
export class VideoObjectTrackingEvaluationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingBoxMeanAveragePrecision" })
  boundingBoxMeanAveragePrecision?: number;

  @SpeakeasyMetadata({ data: "json, name=boundingBoxMetricsEntries", elemType: BoundingBoxMetricsEntry })
  boundingBoxMetricsEntries?: BoundingBoxMetricsEntry[];

  @SpeakeasyMetadata({ data: "json, name=evaluatedBoundingBoxCount" })
  evaluatedBoundingBoxCount?: number;

  @SpeakeasyMetadata({ data: "json, name=evaluatedFrameCount" })
  evaluatedFrameCount?: number;
}
