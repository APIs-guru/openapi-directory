import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ApiKeyUpdateCurrentRequestBodyPermissionSetEnum {
    None = "none",
    Full = "full",
    DesktopApp = "desktop_app",
    SyncApp = "sync_app",
    OfficeIntegration = "office_integration",
    MobileApp = "mobile_app"
}
export declare class ApiKeyUpdateCurrentRequestBody extends SpeakeasyBase {
    expiresAt?: Date;
    name?: string;
    permissionSet?: ApiKeyUpdateCurrentRequestBodyPermissionSetEnum;
}
export declare class ApiKeyUpdateCurrentRequest extends SpeakeasyBase {
    request?: ApiKeyUpdateCurrentRequestBody;
}
export declare class ApiKeyUpdateCurrentResponse extends SpeakeasyBase {
    apiKeyEntity?: shared.ApiKeyEntity;
    contentType: string;
    statusCode: number;
}
