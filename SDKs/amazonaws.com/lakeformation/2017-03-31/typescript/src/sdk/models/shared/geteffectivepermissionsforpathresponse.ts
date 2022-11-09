import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PrincipalResourcePermissions } from "./principalresourcepermissions";


export class GetEffectivePermissionsForPathResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Permissions", elemType: shared.PrincipalResourcePermissions })
  permissions?: PrincipalResourcePermissions[];
}
