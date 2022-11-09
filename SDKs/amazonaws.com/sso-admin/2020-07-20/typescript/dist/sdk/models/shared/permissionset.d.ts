import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An entity that contains IAM policies.
**/
export declare class PermissionSet extends SpeakeasyBase {
    createdDate?: Date;
    description?: string;
    name?: string;
    permissionSetArn?: string;
    relayState?: string;
    sessionDuration?: string;
}
