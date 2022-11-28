package shared

// GoogleCloudApigeeV1SecurityReportMetadata
// Metadata for the security report.
type GoogleCloudApigeeV1SecurityReportMetadata struct {
	Dimensions     []string `json:"dimensions,omitempty"`
	EndTimestamp   *string  `json:"endTimestamp,omitempty"`
	Metrics        []string `json:"metrics,omitempty"`
	MimeType       *string  `json:"mimeType,omitempty"`
	StartTimestamp *string  `json:"startTimestamp,omitempty"`
	TimeUnit       *string  `json:"timeUnit,omitempty"`
}
