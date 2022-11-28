package shared

// GoogleCloudApigeeV1TraceConfigOverride
// A representation of a configuration override.
type GoogleCloudApigeeV1TraceConfigOverride struct {
	APIProxy       *string                                 `json:"apiProxy,omitempty"`
	Name           *string                                 `json:"name,omitempty"`
	SamplingConfig *GoogleCloudApigeeV1TraceSamplingConfig `json:"samplingConfig,omitempty"`
}
