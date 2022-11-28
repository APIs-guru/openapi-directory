import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPermissionGroupsPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class GetPermissionGroupsRequest extends SpeakeasyBase {
    pathParams: GetPermissionGroupsPathParams;
}
export declare class GetPermissionGroupsResponse extends SpeakeasyBase {
    contentType: string;
    permissionGroupModels?: shared.PermissionGroupModel[];
    statusCode: number;
}
