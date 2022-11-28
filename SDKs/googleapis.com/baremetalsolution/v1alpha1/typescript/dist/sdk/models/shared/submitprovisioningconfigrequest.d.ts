import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningConfig } from "./provisioningconfig";
/**
 * Request for SubmitProvisioningConfig.
**/
export declare class SubmitProvisioningConfigRequest extends SpeakeasyBase {
    email?: string;
    provisioningConfig?: ProvisioningConfig;
}
