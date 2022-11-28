import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApiKeyEntityPermissionSetEnum {
    None = "none",
    Full = "full",
    DesktopApp = "desktop_app",
    SyncApp = "sync_app",
    OfficeIntegration = "office_integration",
    MobileApp = "mobile_app"
}
/**
 * List Api Keys
**/
export declare class ApiKeyEntity extends SpeakeasyBase {
    createdAt?: Date;
    descriptiveLabel?: string;
    expiresAt?: Date;
    id?: number;
    key?: string;
    lastUseAt?: Date;
    name?: string;
    path?: string;
    permissionSet?: ApiKeyEntityPermissionSetEnum;
    platform?: string;
    userId?: number;
}
