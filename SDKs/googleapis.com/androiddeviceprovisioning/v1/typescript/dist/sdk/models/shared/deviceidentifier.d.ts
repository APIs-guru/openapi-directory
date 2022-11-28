import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeviceIdentifierDeviceTypeEnum {
    DeviceTypeUnspecified = "DEVICE_TYPE_UNSPECIFIED",
    DeviceTypeAndroid = "DEVICE_TYPE_ANDROID",
    DeviceTypeChromeOs = "DEVICE_TYPE_CHROME_OS"
}
/**
 * Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
**/
export declare class DeviceIdentifier extends SpeakeasyBase {
    chromeOsAttestedDeviceId?: string;
    deviceType?: DeviceIdentifierDeviceTypeEnum;
    imei?: string;
    manufacturer?: string;
    meid?: string;
    model?: string;
    serialNumber?: string;
}
