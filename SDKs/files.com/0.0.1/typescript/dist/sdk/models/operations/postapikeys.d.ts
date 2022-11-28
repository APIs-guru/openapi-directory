import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostApiKeysRequestBodyPermissionSetEnum {
    None = "none",
    Full = "full",
    DesktopApp = "desktop_app",
    SyncApp = "sync_app",
    OfficeIntegration = "office_integration",
    MobileApp = "mobile_app"
}
export declare class PostApiKeysRequestBody extends SpeakeasyBase {
    expiresAt?: Date;
    name?: string;
    path?: string;
    permissionSet?: PostApiKeysRequestBodyPermissionSetEnum;
    userId?: number;
}
export declare class PostApiKeysRequest extends SpeakeasyBase {
    request?: PostApiKeysRequestBody;
}
export declare class PostApiKeysResponse extends SpeakeasyBase {
    apiKeyEntity?: shared.ApiKeyEntity;
    contentType: string;
    statusCode: number;
}
