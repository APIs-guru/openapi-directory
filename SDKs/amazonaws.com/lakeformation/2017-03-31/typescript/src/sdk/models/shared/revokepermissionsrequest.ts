import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionEnum } from "./permissionenum";
import { PermissionEnum } from "./permissionenum";
import { DataLakePrincipal } from "./datalakeprincipal";
import { Resource } from "./resource";


export class RevokePermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=Permissions" })
  permissions: PermissionEnum[];

  @Metadata({ data: "json, name=PermissionsWithGrantOption" })
  permissionsWithGrantOption?: PermissionEnum[];

  @Metadata({ data: "json, name=Principal" })
  principal: DataLakePrincipal;

  @Metadata({ data: "json, name=Resource" })
  resource: Resource;
}
