import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageClassificationModelMetadata
/** 
 * Model metadata for image classification.
**/
export class ImageClassificationModelMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseModelId" })
  baseModelId?: string;

  @Metadata({ data: "json, name=modelType" })
  modelType?: string;

  @Metadata({ data: "json, name=nodeCount" })
  nodeCount?: string;

  @Metadata({ data: "json, name=nodeQps" })
  nodeQps?: number;

  @Metadata({ data: "json, name=stopReason" })
  stopReason?: string;

  @Metadata({ data: "json, name=trainBudget" })
  trainBudget?: string;

  @Metadata({ data: "json, name=trainCost" })
  trainCost?: string;
}
