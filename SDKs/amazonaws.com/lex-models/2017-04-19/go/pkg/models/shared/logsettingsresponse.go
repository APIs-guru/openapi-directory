package shared

type LogSettingsResponse struct {
	Destination    *DestinationEnum `json:"destination"`
	KmsKeyArn      *string          `json:"kmsKeyArn"`
	LogType        *LogTypeEnum     `json:"logType"`
	ResourceArn    *string          `json:"resourceArn"`
	ResourcePrefix *string          `json:"resourcePrefix"`
}
