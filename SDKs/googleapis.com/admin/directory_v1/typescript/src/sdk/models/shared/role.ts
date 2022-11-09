import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RoleRolePrivileges extends SpeakeasyBase {
  @Metadata({ data: "json, name=privilegeName" })
  privilegeName?: string;

  @Metadata({ data: "json, name=serviceId" })
  serviceId?: string;
}


export class Role extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=isSuperAdminRole" })
  isSuperAdminRole?: boolean;

  @Metadata({ data: "json, name=isSystemRole" })
  isSystemRole?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=roleDescription" })
  roleDescription?: string;

  @Metadata({ data: "json, name=roleId" })
  roleId?: string;

  @Metadata({ data: "json, name=roleName" })
  roleName?: string;

  @Metadata({ data: "json, name=rolePrivileges", elemType: shared.RoleRolePrivileges })
  rolePrivileges?: RoleRolePrivileges[];
}
