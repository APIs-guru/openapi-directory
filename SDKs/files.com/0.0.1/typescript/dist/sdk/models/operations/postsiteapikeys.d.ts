import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostSiteApiKeysRequestBodyPermissionSetEnum {
    None = "none",
    Full = "full",
    DesktopApp = "desktop_app",
    SyncApp = "sync_app",
    OfficeIntegration = "office_integration",
    MobileApp = "mobile_app"
}
export declare class PostSiteApiKeysRequestBody extends SpeakeasyBase {
    expiresAt?: Date;
    name?: string;
    path?: string;
    permissionSet?: PostSiteApiKeysRequestBodyPermissionSetEnum;
    userId?: number;
}
export declare class PostSiteApiKeysRequest extends SpeakeasyBase {
    request?: PostSiteApiKeysRequestBody;
}
export declare class PostSiteApiKeysResponse extends SpeakeasyBase {
    apiKeyEntity?: shared.ApiKeyEntity;
    contentType: string;
    statusCode: number;
}
