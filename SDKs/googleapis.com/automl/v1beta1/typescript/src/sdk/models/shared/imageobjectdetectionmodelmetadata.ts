import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageObjectDetectionModelMetadata
/** 
 * Model metadata specific to image object detection.
**/
export class ImageObjectDetectionModelMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=modelType" })
  modelType?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeCount" })
  nodeCount?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeQps" })
  nodeQps?: number;

  @SpeakeasyMetadata({ data: "json, name=stopReason" })
  stopReason?: string;

  @SpeakeasyMetadata({ data: "json, name=trainBudgetMilliNodeHours" })
  trainBudgetMilliNodeHours?: string;

  @SpeakeasyMetadata({ data: "json, name=trainCostMilliNodeHours" })
  trainCostMilliNodeHours?: string;
}
