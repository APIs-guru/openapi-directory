import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningConfig } from "./provisioningconfig";



// SubmitProvisioningConfigResponse
/** 
 * Response for SubmitProvisioningConfig.
**/
export class SubmitProvisioningConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=provisioningConfig" })
  provisioningConfig?: ProvisioningConfig;
}
