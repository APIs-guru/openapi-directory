package shared

type SearchAutoCompleteResponseTerms struct {
	Count *int64  `json:"count,omitempty"`
	Item  *string `json:"item,omitempty"`
}

// SearchAutoCompleteResponse
// Search auto complete query response
type SearchAutoCompleteResponse struct {
	Terms []SearchAutoCompleteResponseTerms `json:"terms,omitempty"`
}
