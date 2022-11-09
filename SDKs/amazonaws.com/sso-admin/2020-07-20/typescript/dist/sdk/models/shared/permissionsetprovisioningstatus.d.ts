import { SpeakeasyBase } from "../../../internal/utils/utils";
import { StatusValuesEnum } from "./statusvaluesenum";
/**
 * A structure that is used to provide the status of the provisioning operation for a specified permission set.
**/
export declare class PermissionSetProvisioningStatus extends SpeakeasyBase {
    accountId?: string;
    createdDate?: Date;
    failureReason?: string;
    permissionSetArn?: string;
    requestId?: string;
    status?: StatusValuesEnum;
}
