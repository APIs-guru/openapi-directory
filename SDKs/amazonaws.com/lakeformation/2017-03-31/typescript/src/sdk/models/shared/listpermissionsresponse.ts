import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PrincipalResourcePermissions } from "./principalresourcepermissions";


export class ListPermissionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PrincipalResourcePermissions", elemType: shared.PrincipalResourcePermissions })
  principalResourcePermissions?: PrincipalResourcePermissions[];
}
