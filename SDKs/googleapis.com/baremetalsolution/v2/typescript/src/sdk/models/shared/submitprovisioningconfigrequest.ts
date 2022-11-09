import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningConfig } from "./provisioningconfig";


// SubmitProvisioningConfigRequest
/** 
 * Request for SubmitProvisioningConfig.
**/
export class SubmitProvisioningConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=provisioningConfig" })
  provisioningConfig?: ProvisioningConfig;
}
