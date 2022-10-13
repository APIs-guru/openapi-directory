package shared

type ListContactsResult struct {
	Contacts  []Contact `json:"Contacts"`
	NextToken *string   `json:"NextToken"`
}
