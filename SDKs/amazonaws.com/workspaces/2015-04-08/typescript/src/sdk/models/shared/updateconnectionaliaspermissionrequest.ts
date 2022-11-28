import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectionAliasPermission } from "./connectionaliaspermission";



export class UpdateConnectionAliasPermissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasId" })
  aliasId: string;

  @SpeakeasyMetadata({ data: "json, name=ConnectionAliasPermission" })
  connectionAliasPermission: ConnectionAliasPermission;
}
