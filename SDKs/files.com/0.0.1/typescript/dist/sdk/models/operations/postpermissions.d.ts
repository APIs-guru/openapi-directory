import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostPermissionsRequestBody extends SpeakeasyBase {
    groupId?: number;
    path?: string;
    permission?: string;
    recursive?: boolean;
    userId?: number;
    username?: string;
}
export declare class PostPermissionsRequest extends SpeakeasyBase {
    request?: PostPermissionsRequestBody;
}
export declare class PostPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    permissionEntity?: shared.PermissionEntity;
    statusCode: number;
}
