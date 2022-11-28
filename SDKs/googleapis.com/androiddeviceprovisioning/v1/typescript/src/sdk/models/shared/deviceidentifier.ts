import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeviceIdentifierDeviceTypeEnum {
    DeviceTypeUnspecified = "DEVICE_TYPE_UNSPECIFIED",
    DeviceTypeAndroid = "DEVICE_TYPE_ANDROID",
    DeviceTypeChromeOs = "DEVICE_TYPE_CHROME_OS"
}


// DeviceIdentifier
/** 
 * Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
**/
export class DeviceIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chromeOsAttestedDeviceId" })
  chromeOsAttestedDeviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceType" })
  deviceType?: DeviceIdentifierDeviceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=imei" })
  imei?: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=meid" })
  meid?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;
}
