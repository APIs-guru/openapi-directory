package shared

// UpdateEncryptionPasswordPolicies
// Request model for updating encryption password policies
type UpdateEncryptionPasswordPolicies struct {
	CharacterRules         *CharacterRules `json:"characterRules,omitempty"`
	MinLength              *int32          `json:"minLength,omitempty"`
	RejectKeyboardPatterns *bool           `json:"rejectKeyboardPatterns,omitempty"`
	RejectUserInfo         *bool           `json:"rejectUserInfo,omitempty"`
}
