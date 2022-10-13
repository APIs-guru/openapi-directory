package shared

type UpdateSharesPasswordPolicies struct {
	CharacterRules         *CharacterRules `json:"characterRules"`
	MinLength              *int32          `json:"minLength"`
	RejectDictionaryWords  *bool           `json:"rejectDictionaryWords"`
	RejectKeyboardPatterns *bool           `json:"rejectKeyboardPatterns"`
	RejectUserInfo         *bool           `json:"rejectUserInfo"`
}
