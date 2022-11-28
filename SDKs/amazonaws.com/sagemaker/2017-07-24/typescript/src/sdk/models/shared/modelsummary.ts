import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModelSummary
/** 
 * Provides summary information about a model.
**/
export class ModelSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ModelArn" })
  modelArn: string;

  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName: string;
}
