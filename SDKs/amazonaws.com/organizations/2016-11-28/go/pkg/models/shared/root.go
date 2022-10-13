package shared

type Root struct {
	Arn         *string             `json:"Arn"`
	ID          *string             `json:"Id"`
	Name        *string             `json:"Name"`
	PolicyTypes []PolicyTypeSummary `json:"PolicyTypes"`
}
