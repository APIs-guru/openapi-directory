import { SpeakeasyBase } from "../../../internal/utils";
import { PrincipalResourcePermissions } from "./principalresourcepermissions";
export declare class ListPermissionsResponse extends SpeakeasyBase {
    nextToken?: string;
    principalResourcePermissions?: PrincipalResourcePermissions[];
}
