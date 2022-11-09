import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModelExplainabilityAppSpecification
/** 
 * Docker container image configuration object for the model explainability job.
**/
export class ModelExplainabilityAppSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigUri" })
  configUri: string;

  @Metadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @Metadata({ data: "json, name=ImageUri" })
  imageUri: string;
}
