import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectionAliasPermission } from "./connectionaliaspermission";


export class UpdateConnectionAliasPermissionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasId" })
  aliasId: string;

  @Metadata({ data: "json, name=ConnectionAliasPermission" })
  connectionAliasPermission: ConnectionAliasPermission;
}
