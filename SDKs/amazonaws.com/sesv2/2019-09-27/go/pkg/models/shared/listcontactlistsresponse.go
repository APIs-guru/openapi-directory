package shared

type ListContactListsResponse struct {
	ContactLists []ContactList `json:"ContactLists"`
	NextToken    *string       `json:"NextToken"`
}
