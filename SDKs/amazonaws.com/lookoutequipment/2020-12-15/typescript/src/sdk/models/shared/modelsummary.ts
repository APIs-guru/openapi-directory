import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ModelStatusEnum } from "./modelstatusenum";


// ModelSummary
/** 
 * Provides information about the specified ML model, including dataset and model names and ARNs, as well as status. 
**/
export class ModelSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @Metadata({ data: "json, name=DatasetName" })
  datasetName?: string;

  @Metadata({ data: "json, name=ModelArn" })
  modelArn?: string;

  @Metadata({ data: "json, name=ModelName" })
  modelName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: ModelStatusEnum;
}
