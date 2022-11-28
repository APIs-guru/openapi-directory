package shared

// CompatibleImage
// A JSON-formatted object that describes a compatible Amazon Machine Image (AMI), including the ID and name for a Snow device AMI. This AMI is compatible with the device's physical hardware requirements, and it should be able to be run in an SBE1 instance on the device.
type CompatibleImage struct {
	AmiID *string `json:"AmiId,omitempty"`
	Name  *string `json:"Name,omitempty"`
}
