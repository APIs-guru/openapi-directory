import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersUserIdApiKeysPathParams extends SpeakeasyBase {
    userId: number;
}
export declare enum PostUsersUserIdApiKeysRequestBodyPermissionSetEnum {
    None = "none",
    Full = "full",
    DesktopApp = "desktop_app",
    SyncApp = "sync_app",
    OfficeIntegration = "office_integration",
    MobileApp = "mobile_app"
}
export declare class PostUsersUserIdApiKeysRequestBody extends SpeakeasyBase {
    expiresAt?: Date;
    name?: string;
    path?: string;
    permissionSet?: PostUsersUserIdApiKeysRequestBodyPermissionSetEnum;
}
export declare class PostUsersUserIdApiKeysRequest extends SpeakeasyBase {
    pathParams: PostUsersUserIdApiKeysPathParams;
    request?: PostUsersUserIdApiKeysRequestBody;
}
export declare class PostUsersUserIdApiKeysResponse extends SpeakeasyBase {
    apiKeyEntity?: shared.ApiKeyEntity;
    contentType: string;
    statusCode: number;
}
