package shared

type DeviceIdentifierDeviceTypeEnum string

const (
	DeviceIdentifierDeviceTypeEnumDeviceTypeUnspecified DeviceIdentifierDeviceTypeEnum = "DEVICE_TYPE_UNSPECIFIED"
	DeviceIdentifierDeviceTypeEnumDeviceTypeAndroid     DeviceIdentifierDeviceTypeEnum = "DEVICE_TYPE_ANDROID"
	DeviceIdentifierDeviceTypeEnumDeviceTypeChromeOs    DeviceIdentifierDeviceTypeEnum = "DEVICE_TYPE_CHROME_OS"
)

// DeviceIdentifier
// Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
type DeviceIdentifier struct {
	ChromeOsAttestedDeviceID *string                         `json:"chromeOsAttestedDeviceId,omitempty"`
	DeviceType               *DeviceIdentifierDeviceTypeEnum `json:"deviceType,omitempty"`
	Imei                     *string                         `json:"imei,omitempty"`
	Manufacturer             *string                         `json:"manufacturer,omitempty"`
	Meid                     *string                         `json:"meid,omitempty"`
	Model                    *string                         `json:"model,omitempty"`
	SerialNumber             *string                         `json:"serialNumber,omitempty"`
}
