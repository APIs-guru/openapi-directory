import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModelBiasAppSpecification
/** 
 * Docker container image configuration object for the model bias job.
**/
export class ModelBiasAppSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigUri" })
  configUri: string;

  @SpeakeasyMetadata({ data: "json, name=Environment" })
  environment?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ImageUri" })
  imageUri: string;
}
