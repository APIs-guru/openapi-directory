package shared

type Value struct {
	Applicable *bool                  `json:"applicable"`
	Value      map[string]interface{} `json:"value"`
}
