package shared

type Amount struct {
	Currency *string `json:"currency"`
	Value    *string `json:"value"`
}
