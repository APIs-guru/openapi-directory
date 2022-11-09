import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BoundingBoxMetricsEntry } from "./boundingboxmetricsentry";


// ImageObjectDetectionEvaluationMetrics
/** 
 * Model evaluation metrics for image object detection problems. Evaluates prediction quality of labeled bounding boxes.
**/
export class ImageObjectDetectionEvaluationMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingBoxMeanAveragePrecision" })
  boundingBoxMeanAveragePrecision?: number;

  @Metadata({ data: "json, name=boundingBoxMetricsEntries", elemType: shared.BoundingBoxMetricsEntry })
  boundingBoxMetricsEntries?: BoundingBoxMetricsEntry[];

  @Metadata({ data: "json, name=evaluatedBoundingBoxCount" })
  evaluatedBoundingBoxCount?: number;
}
