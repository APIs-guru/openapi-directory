package shared



type RegexPatternSet struct {
    Name *string `json:"Name,omitempty"`
    RegexPatternSetID string `json:"RegexPatternSetId"`
    RegexPatternStrings []string `json:"RegexPatternStrings"`
    
}

