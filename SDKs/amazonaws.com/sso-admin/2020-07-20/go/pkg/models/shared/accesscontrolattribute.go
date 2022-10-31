package shared

type AccessControlAttribute struct {
	Key   string                      `json:"Key"`
	Value AccessControlAttributeValue `json:"Value"`
}
