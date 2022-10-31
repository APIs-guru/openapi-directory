package shared

type SearchAutoCompleteResponseTerms struct {
	Count *int64  `json:"count,omitempty"`
	Item  *string `json:"item,omitempty"`
}

type SearchAutoCompleteResponse struct {
	Terms []SearchAutoCompleteResponseTerms `json:"terms,omitempty"`
}
