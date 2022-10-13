package shared

type UpdateLoginPasswordPolicies struct {
	CharacterRules             *CharacterRules     `json:"characterRules"`
	EnforceLoginPasswordChange *bool               `json:"enforceLoginPasswordChange"`
	MinLength                  *int32              `json:"minLength"`
	NumberOfArchivedPasswords  *int32              `json:"numberOfArchivedPasswords"`
	PasswordExpiration         *PasswordExpiration `json:"passwordExpiration"`
	RejectDictionaryWords      *bool               `json:"rejectDictionaryWords"`
	RejectKeyboardPatterns     *bool               `json:"rejectKeyboardPatterns"`
	RejectUserInfo             *bool               `json:"rejectUserInfo"`
	UserLockout                *UserLockout        `json:"userLockout"`
}
