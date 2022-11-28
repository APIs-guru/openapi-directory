package shared

// UpdateSharesPasswordPolicies
// Request model for updating shares password policies
type UpdateSharesPasswordPolicies struct {
	CharacterRules         *CharacterRules `json:"characterRules,omitempty"`
	MinLength              *int32          `json:"minLength,omitempty"`
	RejectDictionaryWords  *bool           `json:"rejectDictionaryWords,omitempty"`
	RejectKeyboardPatterns *bool           `json:"rejectKeyboardPatterns,omitempty"`
	RejectUserInfo         *bool           `json:"rejectUserInfo,omitempty"`
}
