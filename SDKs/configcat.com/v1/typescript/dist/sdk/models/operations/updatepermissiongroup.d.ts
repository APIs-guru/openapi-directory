import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePermissionGroupPathParams extends SpeakeasyBase {
    permissionGroupId: number;
}
export declare class UpdatePermissionGroupRequests extends SpeakeasyBase {
    updatePermissionGroupRequest?: shared.UpdatePermissionGroupRequest;
    updatePermissionGroupRequest1?: shared.UpdatePermissionGroupRequest;
    updatePermissionGroupRequest2?: shared.UpdatePermissionGroupRequest;
}
export declare class UpdatePermissionGroupRequest extends SpeakeasyBase {
    pathParams: UpdatePermissionGroupPathParams;
    request: UpdatePermissionGroupRequests;
}
export declare class UpdatePermissionGroupResponse extends SpeakeasyBase {
    contentType: string;
    permissionGroupModel?: shared.PermissionGroupModel;
    statusCode: number;
}
