import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PermissionEntityPermissionEnum {
    Full = "full",
    Readonly = "readonly",
    Writeonly = "writeonly",
    List = "list",
    History = "history",
    Admin = "admin",
    Bundle = "bundle"
}
/**
 * List Permissions
**/
export declare class PermissionEntity extends SpeakeasyBase {
    groupId?: number;
    groupName?: string;
    id?: number;
    path?: string;
    permission?: PermissionEntityPermissionEnum;
    recursive?: boolean;
    userId?: number;
    username?: string;
}
