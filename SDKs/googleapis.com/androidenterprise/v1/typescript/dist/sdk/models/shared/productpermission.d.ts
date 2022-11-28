import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProductPermissionStateEnum {
    Required = "required",
    Accepted = "accepted"
}
/**
 * A product permissions resource represents the set of permissions required by a specific app and whether or not they have been accepted by an enterprise admin. The API can be used to read the set of permissions, and also to update the set to indicate that permissions have been accepted.
**/
export declare class ProductPermission extends SpeakeasyBase {
    permissionId?: string;
    state?: ProductPermissionStateEnum;
}
