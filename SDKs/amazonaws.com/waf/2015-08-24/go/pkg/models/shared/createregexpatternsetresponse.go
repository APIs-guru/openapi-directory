package shared



type CreateRegexPatternSetResponse struct {
    ChangeToken *string `json:"ChangeToken,omitempty"`
    RegexPatternSet *RegexPatternSet `json:"RegexPatternSet,omitempty"`
    
}

