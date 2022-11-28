import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingBoxMetricsEntry } from "./boundingboxmetricsentry";



// ImageObjectDetectionEvaluationMetrics
/** 
 * Model evaluation metrics for image object detection problems. Evaluates prediction quality of labeled bounding boxes.
**/
export class ImageObjectDetectionEvaluationMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingBoxMeanAveragePrecision" })
  boundingBoxMeanAveragePrecision?: number;

  @SpeakeasyMetadata({ data: "json, name=boundingBoxMetricsEntries", elemType: BoundingBoxMetricsEntry })
  boundingBoxMetricsEntries?: BoundingBoxMetricsEntry[];

  @SpeakeasyMetadata({ data: "json, name=evaluatedBoundingBoxCount" })
  evaluatedBoundingBoxCount?: number;
}
