package shared

type GoogleCloudApigeeV1SecurityReportMetadata struct {
	Dimensions     []string `json:"dimensions"`
	EndTimestamp   *string  `json:"endTimestamp"`
	Metrics        []string `json:"metrics"`
	MimeType       *string  `json:"mimeType"`
	StartTimestamp *string  `json:"startTimestamp"`
	TimeUnit       *string  `json:"timeUnit"`
}
