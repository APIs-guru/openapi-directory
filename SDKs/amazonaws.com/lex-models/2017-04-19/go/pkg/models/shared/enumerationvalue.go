package shared

type EnumerationValue struct {
	Synonyms []string `json:"synonyms,omitempty"`
	Value    string   `json:"value"`
}
