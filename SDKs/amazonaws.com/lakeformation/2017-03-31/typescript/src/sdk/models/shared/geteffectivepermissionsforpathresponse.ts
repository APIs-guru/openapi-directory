import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrincipalResourcePermissions } from "./principalresourcepermissions";



export class GetEffectivePermissionsForPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Permissions", elemType: PrincipalResourcePermissions })
  permissions?: PrincipalResourcePermissions[];
}
