import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningConfig } from "./provisioningconfig";



// SubmitProvisioningConfigRequest
/** 
 * Request for SubmitProvisioningConfig.
**/
export class SubmitProvisioningConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=provisioningConfig" })
  provisioningConfig?: ProvisioningConfig;
}
