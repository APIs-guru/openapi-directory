import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningArtifactTypeEnum } from "./provisioningartifacttypeenum";


// ProvisioningArtifactProperties
/** 
 * Information about a provisioning artifact (also known as a version) for a product.
**/
export class ProvisioningArtifactProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisableTemplateValidation" })
  disableTemplateValidation?: boolean;

  @Metadata({ data: "json, name=Info" })
  info: Map<string, string>;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Type" })
  type?: ProvisioningArtifactTypeEnum;
}
