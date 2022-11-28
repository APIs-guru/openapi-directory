import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningArtifactTypeEnum } from "./provisioningartifacttypeenum";



// ProvisioningArtifactProperties
/** 
 * Information about a provisioning artifact (also known as a version) for a product.
**/
export class ProvisioningArtifactProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DisableTemplateValidation" })
  disableTemplateValidation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Info" })
  info: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ProvisioningArtifactTypeEnum;
}
