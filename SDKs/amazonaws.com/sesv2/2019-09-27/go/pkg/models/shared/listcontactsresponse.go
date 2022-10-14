package shared

type ListContactsResponse struct {
	Contacts  []Contact `json:"Contacts,omitempty"`
	NextToken *string   `json:"NextToken,omitempty"`
}
