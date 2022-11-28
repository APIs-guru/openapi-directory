package shared

// UpdateLoginPasswordPolicies
// Request model for updating login password policies
type UpdateLoginPasswordPolicies struct {
	CharacterRules             *CharacterRules     `json:"characterRules,omitempty"`
	EnforceLoginPasswordChange *bool               `json:"enforceLoginPasswordChange,omitempty"`
	MinLength                  *int32              `json:"minLength,omitempty"`
	NumberOfArchivedPasswords  *int32              `json:"numberOfArchivedPasswords,omitempty"`
	PasswordExpiration         *PasswordExpiration `json:"passwordExpiration,omitempty"`
	RejectDictionaryWords      *bool               `json:"rejectDictionaryWords,omitempty"`
	RejectKeyboardPatterns     *bool               `json:"rejectKeyboardPatterns,omitempty"`
	RejectUserInfo             *bool               `json:"rejectUserInfo,omitempty"`
	UserLockout                *UserLockout        `json:"userLockout,omitempty"`
}
