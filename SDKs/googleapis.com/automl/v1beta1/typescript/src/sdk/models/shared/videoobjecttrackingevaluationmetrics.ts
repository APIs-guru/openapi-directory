import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BoundingBoxMetricsEntry } from "./boundingboxmetricsentry";


// VideoObjectTrackingEvaluationMetrics
/** 
 * Model evaluation metrics for video object tracking problems. Evaluates prediction quality of both labeled bounding boxes and labeled tracks (i.e. series of bounding boxes sharing same label and instance ID).
**/
export class VideoObjectTrackingEvaluationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingBoxMeanAveragePrecision" })
  boundingBoxMeanAveragePrecision?: number;

  @Metadata({ data: "json, name=boundingBoxMetricsEntries", elemType: shared.BoundingBoxMetricsEntry })
  boundingBoxMetricsEntries?: BoundingBoxMetricsEntry[];

  @Metadata({ data: "json, name=evaluatedBoundingBoxCount" })
  evaluatedBoundingBoxCount?: number;

  @Metadata({ data: "json, name=evaluatedFrameCount" })
  evaluatedFrameCount?: number;
}
