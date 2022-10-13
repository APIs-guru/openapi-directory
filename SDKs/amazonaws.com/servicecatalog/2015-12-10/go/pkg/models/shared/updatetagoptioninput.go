package shared

type UpdateTagOptionInput struct {
	Active *bool   `json:"Active"`
	ID     string  `json:"Id"`
	Value  *string `json:"Value"`
}
