package shared

type LoggingConfiguration struct {
	LogDestinationConfigs []string       `json:"LogDestinationConfigs"`
	RedactedFields        []FieldToMatch `json:"RedactedFields,omitempty"`
	ResourceArn           string         `json:"ResourceArn"`
}
