package shared

type ListContactsResult struct {
	Contacts  []Contact `json:"Contacts,omitempty"`
	NextToken *string   `json:"NextToken,omitempty"`
}
