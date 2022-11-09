import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModelSummary
/** 
 * Provides summary information about a model.
**/
export class ModelSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @Metadata({ data: "json, name=ModelArn" })
  modelArn: string;

  @Metadata({ data: "json, name=ModelName" })
  modelName: string;
}
