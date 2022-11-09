import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageObjectDetectionModelMetadata
/** 
 * Model metadata specific to image object detection.
**/
export class ImageObjectDetectionModelMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=modelType" })
  modelType?: string;

  @Metadata({ data: "json, name=nodeCount" })
  nodeCount?: string;

  @Metadata({ data: "json, name=nodeQps" })
  nodeQps?: number;

  @Metadata({ data: "json, name=stopReason" })
  stopReason?: string;

  @Metadata({ data: "json, name=trainBudgetMilliNodeHours" })
  trainBudgetMilliNodeHours?: string;

  @Metadata({ data: "json, name=trainCostMilliNodeHours" })
  trainCostMilliNodeHours?: string;
}
