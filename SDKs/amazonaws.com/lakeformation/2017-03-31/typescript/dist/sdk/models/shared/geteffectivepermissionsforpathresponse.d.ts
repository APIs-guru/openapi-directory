import { SpeakeasyBase } from "../../../internal/utils";
import { PrincipalResourcePermissions } from "./principalresourcepermissions";
export declare class GetEffectivePermissionsForPathResponse extends SpeakeasyBase {
    nextToken?: string;
    permissions?: PrincipalResourcePermissions[];
}
