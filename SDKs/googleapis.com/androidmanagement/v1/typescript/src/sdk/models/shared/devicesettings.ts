import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeviceSettingsEncryptionStatusEnum {
    EncryptionStatusUnspecified = "ENCRYPTION_STATUS_UNSPECIFIED"
,    Unsupported = "UNSUPPORTED"
,    Inactive = "INACTIVE"
,    Activating = "ACTIVATING"
,    Active = "ACTIVE"
,    ActiveDefaultKey = "ACTIVE_DEFAULT_KEY"
,    ActivePerUser = "ACTIVE_PER_USER"
}


// DeviceSettings
/** 
 * Information about security related device settings on device.
**/
export class DeviceSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=adbEnabled" })
  adbEnabled?: boolean;

  @Metadata({ data: "json, name=developmentSettingsEnabled" })
  developmentSettingsEnabled?: boolean;

  @Metadata({ data: "json, name=encryptionStatus" })
  encryptionStatus?: DeviceSettingsEncryptionStatusEnum;

  @Metadata({ data: "json, name=isDeviceSecure" })
  isDeviceSecure?: boolean;

  @Metadata({ data: "json, name=isEncrypted" })
  isEncrypted?: boolean;

  @Metadata({ data: "json, name=unknownSourcesEnabled" })
  unknownSourcesEnabled?: boolean;

  @Metadata({ data: "json, name=verifyAppsEnabled" })
  verifyAppsEnabled?: boolean;
}
