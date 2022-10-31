package shared

import (
	"time"
)

type LoginPasswordPolicies struct {
	CharacterRules            CharacterRules     `json:"characterRules"`
	MinLength                 int32              `json:"minLength"`
	NumberOfArchivedPasswords int32              `json:"numberOfArchivedPasswords"`
	PasswordExpiration        PasswordExpiration `json:"passwordExpiration"`
	RejectDictionaryWords     bool               `json:"rejectDictionaryWords"`
	RejectKeyboardPatterns    bool               `json:"rejectKeyboardPatterns"`
	RejectUserInfo            bool               `json:"rejectUserInfo"`
	UpdatedAt                 time.Time          `json:"updatedAt"`
	UpdatedBy                 UserInfo           `json:"updatedBy"`
	UserLockout               UserLockout        `json:"userLockout"`
}
