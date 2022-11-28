import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModelExplainabilityAppSpecification
/** 
 * Docker container image configuration object for the model explainability job.
**/
export class ModelExplainabilityAppSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigUri" })
  configUri: string;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ImageUri" })
  imageUri: string;
}
