import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PrincipalResourcePermissions } from "./principalresourcepermissions";



export class ListPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PrincipalResourcePermissions", elemType: PrincipalResourcePermissions })
  principalResourcePermissions?: PrincipalResourcePermissions[];
}
