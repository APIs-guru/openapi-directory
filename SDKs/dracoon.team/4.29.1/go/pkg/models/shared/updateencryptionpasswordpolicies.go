package shared

type UpdateEncryptionPasswordPolicies struct {
	CharacterRules         *CharacterRules `json:"characterRules"`
	MinLength              *int32          `json:"minLength"`
	RejectKeyboardPatterns *bool           `json:"rejectKeyboardPatterns"`
	RejectUserInfo         *bool           `json:"rejectUserInfo"`
}
