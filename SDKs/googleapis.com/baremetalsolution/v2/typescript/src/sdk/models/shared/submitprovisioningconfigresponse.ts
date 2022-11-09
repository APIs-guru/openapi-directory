import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningConfig } from "./provisioningconfig";


// SubmitProvisioningConfigResponse
/** 
 * Response for SubmitProvisioningConfig.
**/
export class SubmitProvisioningConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=provisioningConfig" })
  provisioningConfig?: ProvisioningConfig;
}
