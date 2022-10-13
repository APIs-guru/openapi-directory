package shared

type ListContactsResponse struct {
	Contacts  []Contact `json:"Contacts"`
	NextToken *string   `json:"NextToken"`
}
