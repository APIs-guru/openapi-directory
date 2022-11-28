package shared

// DeviceMetadata
// Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata).
type DeviceMetadata struct {
	Entries map[string]string `json:"entries,omitempty"`
}
