import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeviceSettingsEncryptionStatusEnum {
    EncryptionStatusUnspecified = "ENCRYPTION_STATUS_UNSPECIFIED",
    Unsupported = "UNSUPPORTED",
    Inactive = "INACTIVE",
    Activating = "ACTIVATING",
    Active = "ACTIVE",
    ActiveDefaultKey = "ACTIVE_DEFAULT_KEY",
    ActivePerUser = "ACTIVE_PER_USER"
}
/**
 * Information about security related device settings on device.
**/
export declare class DeviceSettings extends SpeakeasyBase {
    adbEnabled?: boolean;
    developmentSettingsEnabled?: boolean;
    encryptionStatus?: DeviceSettingsEncryptionStatusEnum;
    isDeviceSecure?: boolean;
    isEncrypted?: boolean;
    unknownSourcesEnabled?: boolean;
    verifyAppsEnabled?: boolean;
}
