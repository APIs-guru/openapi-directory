package shared

type GoogleCloudApigeeV1QueryMetadata struct {
	Dimensions     []string `json:"dimensions,omitempty"`
	EndTimestamp   *string  `json:"endTimestamp,omitempty"`
	Metrics        []string `json:"metrics,omitempty"`
	OutputFormat   *string  `json:"outputFormat,omitempty"`
	StartTimestamp *string  `json:"startTimestamp,omitempty"`
	TimeUnit       *string  `json:"timeUnit,omitempty"`
}
