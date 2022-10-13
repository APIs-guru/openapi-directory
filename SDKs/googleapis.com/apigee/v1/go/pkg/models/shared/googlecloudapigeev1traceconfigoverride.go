package shared

type GoogleCloudApigeeV1TraceConfigOverride struct {
	APIProxy       *string                                 `json:"apiProxy"`
	Name           *string                                 `json:"name"`
	SamplingConfig *GoogleCloudApigeeV1TraceSamplingConfig `json:"samplingConfig"`
}
