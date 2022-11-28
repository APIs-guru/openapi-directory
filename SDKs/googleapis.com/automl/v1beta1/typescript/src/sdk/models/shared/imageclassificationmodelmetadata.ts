import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageClassificationModelMetadata
/** 
 * Model metadata for image classification.
**/
export class ImageClassificationModelMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseModelId" })
  baseModelId?: string;

  @SpeakeasyMetadata({ data: "json, name=modelType" })
  modelType?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeCount" })
  nodeCount?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeQps" })
  nodeQps?: number;

  @SpeakeasyMetadata({ data: "json, name=stopReason" })
  stopReason?: string;

  @SpeakeasyMetadata({ data: "json, name=trainBudget" })
  trainBudget?: string;

  @SpeakeasyMetadata({ data: "json, name=trainCost" })
  trainCost?: string;
}
