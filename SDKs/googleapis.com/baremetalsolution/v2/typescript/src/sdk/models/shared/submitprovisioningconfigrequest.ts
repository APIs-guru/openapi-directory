import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningConfigInput } from "./provisioningconfig";



// SubmitProvisioningConfigRequestInput
/** 
 * Request for SubmitProvisioningConfig.
**/
export class SubmitProvisioningConfigRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=provisioningConfig" })
  provisioningConfig?: ProvisioningConfigInput;
}
