import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectionAliasPermission } from "./connectionaliaspermission";


export class DescribeConnectionAliasPermissionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasId" })
  aliasId?: string;

  @Metadata({ data: "json, name=ConnectionAliasPermissions", elemType: shared.ConnectionAliasPermission })
  connectionAliasPermissions?: ConnectionAliasPermission[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
