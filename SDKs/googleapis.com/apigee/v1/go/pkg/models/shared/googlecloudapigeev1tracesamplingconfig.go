package shared




type GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum string

const (
    GoogleCloudApigeeV1TraceSamplingConfigSamplerEnumSamplerUnspecified GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum = "SAMPLER_UNSPECIFIED"
GoogleCloudApigeeV1TraceSamplingConfigSamplerEnumOff GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum = "OFF"
GoogleCloudApigeeV1TraceSamplingConfigSamplerEnumProbability GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum = "PROBABILITY"
)


type GoogleCloudApigeeV1TraceSamplingConfig struct {
    Sampler *GoogleCloudApigeeV1TraceSamplingConfigSamplerEnum `json:"sampler,omitempty"`
    SamplingRate *float32 `json:"samplingRate,omitempty"`
    
}

