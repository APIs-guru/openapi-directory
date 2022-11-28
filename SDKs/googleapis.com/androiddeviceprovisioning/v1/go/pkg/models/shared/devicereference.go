package shared

// DeviceReference
// A `DeviceReference` is an API abstraction that lets you supply a _device_ argument to a method using one of the following identifier types: * A numeric API resource ID. * Real-world hardware IDs, such as IMEI number, belonging to the manufactured device. Methods that operate on devices take a `DeviceReference` as a parameter type because it's more flexible for the caller. To learn more about device identifiers, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
type DeviceReference struct {
	DeviceID         *string           `json:"deviceId,omitempty"`
	DeviceIdentifier *DeviceIdentifier `json:"deviceIdentifier,omitempty"`
}
