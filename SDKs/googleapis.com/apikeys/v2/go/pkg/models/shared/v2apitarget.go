package shared

type V2APITarget struct {
	Methods []string `json:"methods,omitempty"`
	Service *string  `json:"service,omitempty"`
}
