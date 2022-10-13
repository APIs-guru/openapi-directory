package shared

type FieldToMatch struct {
	Data *string            `json:"Data"`
	Type MatchFieldTypeEnum `json:"Type"`
}
