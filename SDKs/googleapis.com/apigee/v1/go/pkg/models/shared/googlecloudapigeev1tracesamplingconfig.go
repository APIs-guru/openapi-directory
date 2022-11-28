package shared

type GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum string

const (
	GoogleCloudApigeeV1TraceSamplingConfigSamplerEnumSamplerUnspecified GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum = "SAMPLER_UNSPECIFIED"
	GoogleCloudApigeeV1TraceSamplingConfigSamplerEnumOff                GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum = "OFF"
	GoogleCloudApigeeV1TraceSamplingConfigSamplerEnumProbability        GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum = "PROBABILITY"
)

// GoogleCloudApigeeV1TraceSamplingConfig
// TraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs.
type GoogleCloudApigeeV1TraceSamplingConfig struct {
	Sampler      *GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum `json:"sampler,omitempty"`
	SamplingRate *float32                                           `json:"samplingRate,omitempty"`
}
