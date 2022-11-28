package shared

// GoogleCloudApigeeV1ConfigVersion
// Version of the API proxy configuration schema. Currently, only 4.0 is supported.
type GoogleCloudApigeeV1ConfigVersion struct {
	MajorVersion *int32 `json:"majorVersion,omitempty"`
	MinorVersion *int32 `json:"minorVersion,omitempty"`
}
