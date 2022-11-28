import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionAliasPermission } from "./connectionaliaspermission";



export class DescribeConnectionAliasPermissionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasId" })
  aliasId?: string;

  @SpeakeasyMetadata({ data: "json, name=ConnectionAliasPermissions", elemType: ConnectionAliasPermission })
  connectionAliasPermissions?: ConnectionAliasPermission[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
