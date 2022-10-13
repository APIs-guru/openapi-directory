package shared

type GoogleCloudApigeeV1QueryMetadata struct {
	Dimensions     []string `json:"dimensions"`
	EndTimestamp   *string  `json:"endTimestamp"`
	Metrics        []string `json:"metrics"`
	OutputFormat   *string  `json:"outputFormat"`
	StartTimestamp *string  `json:"startTimestamp"`
	TimeUnit       *string  `json:"timeUnit"`
}
