package shared

// CustomerList
// List of customers
type CustomerList struct {
	Items []Customer `json:"items"`
	Range Range      `json:"range"`
}
