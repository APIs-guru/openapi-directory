package shared

type LogSettingsResponse struct {
	Destination    *DestinationEnum `json:"destination,omitempty"`
	KmsKeyArn      *string          `json:"kmsKeyArn,omitempty"`
	LogType        *LogTypeEnum     `json:"logType,omitempty"`
	ResourceArn    *string          `json:"resourceArn,omitempty"`
	ResourcePrefix *string          `json:"resourcePrefix,omitempty"`
}
