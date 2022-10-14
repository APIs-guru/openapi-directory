package shared

type Root struct {
	Arn         *string             `json:"Arn,omitempty"`
	ID          *string             `json:"Id,omitempty"`
	Name        *string             `json:"Name,omitempty"`
	PolicyTypes []PolicyTypeSummary `json:"PolicyTypes,omitempty"`
}
