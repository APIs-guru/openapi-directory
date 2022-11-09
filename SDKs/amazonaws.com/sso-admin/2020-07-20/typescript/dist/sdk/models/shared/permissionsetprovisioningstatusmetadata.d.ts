import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusValuesEnum } from "./statusvaluesenum";
/**
 * Provides information about the permission set provisioning status.
**/
export declare class PermissionSetProvisioningStatusMetadata extends SpeakeasyBase {
    createdDate?: Date;
    requestId?: string;
    status?: StatusValuesEnum;
}
