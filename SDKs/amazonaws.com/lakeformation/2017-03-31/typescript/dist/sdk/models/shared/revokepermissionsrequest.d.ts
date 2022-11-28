import { SpeakeasyBase } from "../../../internal/utils";
import { PermissionEnum } from "./permissionenum";
import { DataLakePrincipal } from "./datalakeprincipal";
import { Resource } from "./resource";
export declare class RevokePermissionsRequest extends SpeakeasyBase {
    catalogId?: string;
    permissions: PermissionEnum[];
    permissionsWithGrantOption?: PermissionEnum[];
    principal: DataLakePrincipal;
    resource: Resource;
}
