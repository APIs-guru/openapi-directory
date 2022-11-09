import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPermissionGroupPathParams extends SpeakeasyBase {
    permissionGroupId: number;
}
export declare class GetPermissionGroupRequest extends SpeakeasyBase {
    pathParams: GetPermissionGroupPathParams;
}
export declare class GetPermissionGroupResponse extends SpeakeasyBase {
    contentType: string;
    permissionGroupModel?: shared.PermissionGroupModel;
    statusCode: number;
}
