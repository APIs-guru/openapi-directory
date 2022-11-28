import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchApiKeysIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum PatchApiKeysIdRequestBodyPermissionSetEnum {
    None = "none",
    Full = "full",
    DesktopApp = "desktop_app",
    SyncApp = "sync_app",
    OfficeIntegration = "office_integration",
    MobileApp = "mobile_app"
}
export declare class PatchApiKeysIdRequestBody extends SpeakeasyBase {
    expiresAt?: Date;
    name?: string;
    permissionSet?: PatchApiKeysIdRequestBodyPermissionSetEnum;
}
export declare class PatchApiKeysIdRequest extends SpeakeasyBase {
    pathParams: PatchApiKeysIdPathParams;
    request?: PatchApiKeysIdRequestBody;
}
export declare class PatchApiKeysIdResponse extends SpeakeasyBase {
    apiKeyEntity?: shared.ApiKeyEntity;
    contentType: string;
    statusCode: number;
}
