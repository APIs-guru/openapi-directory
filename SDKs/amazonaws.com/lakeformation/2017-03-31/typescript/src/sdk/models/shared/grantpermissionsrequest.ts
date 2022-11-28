import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PermissionEnum } from "./permissionenum";
import { DataLakePrincipal } from "./datalakeprincipal";
import { Resource } from "./resource";



export class GrantPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=Permissions" })
  permissions: PermissionEnum[];

  @SpeakeasyMetadata({ data: "json, name=PermissionsWithGrantOption" })
  permissionsWithGrantOption?: PermissionEnum[];

  @SpeakeasyMetadata({ data: "json, name=Principal" })
  principal: DataLakePrincipal;

  @SpeakeasyMetadata({ data: "json, name=Resource" })
  resource: Resource;
}
