package shared



type ListContactListsResponse struct {
    ContactLists []ContactList `json:"ContactLists,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

