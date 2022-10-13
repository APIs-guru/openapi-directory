package shared

type SearchAutoCompleteResponseTerms struct {
	Count *int64  `json:"count"`
	Item  *string `json:"item"`
}

type SearchAutoCompleteResponse struct {
	Terms []SearchAutoCompleteResponseTerms `json:"terms"`
}
