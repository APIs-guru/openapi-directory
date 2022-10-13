package shared

type SimpleAmount struct {
	Currency *string `json:"currency"`
	Value    *string `json:"value"`
}
