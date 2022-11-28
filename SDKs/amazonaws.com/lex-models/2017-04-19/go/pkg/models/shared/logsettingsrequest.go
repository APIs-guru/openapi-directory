package shared

// LogSettingsRequest
// Settings used to configure delivery mode and destination for conversation logs.
type LogSettingsRequest struct {
	Destination DestinationEnum `json:"destination"`
	KmsKeyArn   *string         `json:"kmsKeyArn,omitempty"`
	LogType     LogTypeEnum     `json:"logType"`
	ResourceArn string          `json:"resourceArn"`
}
