import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An event generated when new permissions are added to an app.
**/
export declare class NewPermissionsEvent extends SpeakeasyBase {
    approvedPermissions?: string[];
    productId?: string;
    requestedPermissions?: string[];
}
