package shared



type LogSettingsRequest struct {
    Destination DestinationEnum `json:"destination"`
    KmsKeyArn *string `json:"kmsKeyArn,omitempty"`
    LogType LogTypeEnum `json:"logType"`
    ResourceArn string `json:"resourceArn"`
    
}

