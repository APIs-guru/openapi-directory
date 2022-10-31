package shared

type FieldToMatch struct {
	Data *string            `json:"Data,omitempty"`
	Type MatchFieldTypeEnum `json:"Type"`
}
