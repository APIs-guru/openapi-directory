package shared

import (
	"time"
)

type EncryptionPasswordPolicies struct {
	CharacterRules         *CharacterRules `json:"characterRules"`
	MinLength              *int32          `json:"minLength"`
	RejectKeyboardPatterns *bool           `json:"rejectKeyboardPatterns"`
	RejectUserInfo         *bool           `json:"rejectUserInfo"`
	UpdatedAt              *time.Time      `json:"updatedAt"`
	UpdatedBy              *UserInfo       `json:"updatedBy"`
}
