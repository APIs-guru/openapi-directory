import { SpeakeasyBase } from "../../../internal/utils";
export declare class RoleRolePrivileges extends SpeakeasyBase {
    privilegeName?: string;
    serviceId?: string;
}
export declare class Role extends SpeakeasyBase {
    etag?: string;
    isSuperAdminRole?: boolean;
    isSystemRole?: boolean;
    kind?: string;
    roleDescription?: string;
    roleId?: string;
    roleName?: string;
    rolePrivileges?: RoleRolePrivileges[];
}
