import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RoleRolePrivileges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privilegeName" })
  privilegeName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId?: string;
}


export class Role extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=isSuperAdminRole" })
  isSuperAdminRole?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSystemRole" })
  isSystemRole?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=roleDescription" })
  roleDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=roleId" })
  roleId?: string;

  @SpeakeasyMetadata({ data: "json, name=roleName" })
  roleName?: string;

  @SpeakeasyMetadata({ data: "json, name=rolePrivileges", elemType: RoleRolePrivileges })
  rolePrivileges?: RoleRolePrivileges[];
}
