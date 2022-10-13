package shared

type AdWordsAccount struct {
	AutoTaggingEnabled *bool   `json:"autoTaggingEnabled"`
	CustomerID         *string `json:"customerId"`
	Kind               *string `json:"kind"`
}
