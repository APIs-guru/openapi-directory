package shared

type RegexPatternSet struct {
	Name                *string  `json:"Name"`
	RegexPatternSetID   string   `json:"RegexPatternSetId"`
	RegexPatternStrings []string `json:"RegexPatternStrings"`
}
