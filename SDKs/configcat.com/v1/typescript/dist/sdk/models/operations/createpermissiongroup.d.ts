import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreatePermissionGroupPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class CreatePermissionGroupRequests extends SpeakeasyBase {
    createPermissionGroupRequest?: shared.CreatePermissionGroupRequest;
    createPermissionGroupRequest1?: shared.CreatePermissionGroupRequest;
    createPermissionGroupRequest2?: shared.CreatePermissionGroupRequest;
}
export declare class CreatePermissionGroupRequest extends SpeakeasyBase {
    pathParams: CreatePermissionGroupPathParams;
    request: CreatePermissionGroupRequests;
}
export declare class CreatePermissionGroupResponse extends SpeakeasyBase {
    contentType: string;
    permissionGroupModel?: shared.PermissionGroupModel;
    statusCode: number;
}
