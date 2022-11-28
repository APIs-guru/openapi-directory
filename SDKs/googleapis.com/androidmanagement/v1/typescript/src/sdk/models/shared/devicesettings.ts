import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeviceSettingsEncryptionStatusEnum {
    EncryptionStatusUnspecified = "ENCRYPTION_STATUS_UNSPECIFIED",
    Unsupported = "UNSUPPORTED",
    Inactive = "INACTIVE",
    Activating = "ACTIVATING",
    Active = "ACTIVE",
    ActiveDefaultKey = "ACTIVE_DEFAULT_KEY",
    ActivePerUser = "ACTIVE_PER_USER"
}


// DeviceSettings
/** 
 * Information about security related device settings on device.
**/
export class DeviceSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adbEnabled" })
  adbEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=developmentSettingsEnabled" })
  developmentSettingsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryptionStatus" })
  encryptionStatus?: DeviceSettingsEncryptionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=isDeviceSecure" })
  isDeviceSecure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isEncrypted" })
  isEncrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=unknownSourcesEnabled" })
  unknownSourcesEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=verifyAppsEnabled" })
  verifyAppsEnabled?: boolean;
}
