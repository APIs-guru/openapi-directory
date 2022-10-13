package shared

type LoggingConfiguration struct {
	LogDestinationConfigs []string       `json:"LogDestinationConfigs"`
	RedactedFields        []FieldToMatch `json:"RedactedFields"`
	ResourceArn           string         `json:"ResourceArn"`
}
