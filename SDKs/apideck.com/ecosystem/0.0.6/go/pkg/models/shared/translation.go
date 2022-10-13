package shared

type Translation struct {
	Key    string  `json:"key"`
	Locale string  `json:"locale"`
	Value  *string `json:"value"`
}
