package shared

type UpdateTagOptionInput struct {
	Active *bool   `json:"Active,omitempty"`
	ID     string  `json:"Id"`
	Value  *string `json:"Value,omitempty"`
}
