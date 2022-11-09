import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModelBiasAppSpecification
/** 
 * Docker container image configuration object for the model bias job.
**/
export class ModelBiasAppSpecification extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigUri" })
  configUri: string;

  @Metadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @Metadata({ data: "json, name=ImageUri" })
  imageUri: string;
}
