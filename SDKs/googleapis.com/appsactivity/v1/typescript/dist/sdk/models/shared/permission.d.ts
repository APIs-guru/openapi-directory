import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare enum PermissionRoleEnum {
    Commenter = "commenter",
    FileOrganizer = "fileOrganizer",
    Owner = "owner",
    PublishedReader = "publishedReader",
    Reader = "reader",
    Writer = "writer"
}
export declare enum PermissionTypeEnum {
    Anyone = "anyone",
    Domain = "domain",
    Group = "group",
    User = "user"
}
/**
 * Contains information about the permissions and type of access allowed with regards to a Google Drive object. This is a subset of the fields contained in a corresponding Drive Permissions object.
**/
export declare class Permission extends SpeakeasyBase {
    name?: string;
    permissionId?: string;
    role?: PermissionRoleEnum;
    type?: PermissionTypeEnum;
    user?: User;
    withLink?: boolean;
}
