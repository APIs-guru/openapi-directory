package shared

type CustomerList struct {
	Items []Customer `json:"items"`
	Range Range      `json:"range"`
}
