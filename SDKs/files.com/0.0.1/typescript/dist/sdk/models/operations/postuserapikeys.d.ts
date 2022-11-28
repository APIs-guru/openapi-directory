import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostUserApiKeysRequestBodyPermissionSetEnum {
    None = "none",
    Full = "full",
    DesktopApp = "desktop_app",
    SyncApp = "sync_app",
    OfficeIntegration = "office_integration",
    MobileApp = "mobile_app"
}
export declare class PostUserApiKeysRequestBody extends SpeakeasyBase {
    expiresAt?: Date;
    name?: string;
    path?: string;
    permissionSet?: PostUserApiKeysRequestBodyPermissionSetEnum;
    userId?: number;
}
export declare class PostUserApiKeysRequest extends SpeakeasyBase {
    request?: PostUserApiKeysRequestBody;
}
export declare class PostUserApiKeysResponse extends SpeakeasyBase {
    apiKeyEntity?: shared.ApiKeyEntity;
    contentType: string;
    statusCode: number;
}
