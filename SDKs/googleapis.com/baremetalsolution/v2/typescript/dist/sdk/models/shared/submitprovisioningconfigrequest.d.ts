import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningConfigInput } from "./provisioningconfig";
/**
 * Request for SubmitProvisioningConfig.
**/
export declare class SubmitProvisioningConfigRequestInput extends SpeakeasyBase {
    email?: string;
    provisioningConfig?: ProvisioningConfigInput;
}
