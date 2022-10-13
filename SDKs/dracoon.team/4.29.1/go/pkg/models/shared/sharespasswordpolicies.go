package shared

import (
	"time"
)

type SharesPasswordPolicies struct {
	CharacterRules         *CharacterRules `json:"characterRules"`
	MinLength              *int32          `json:"minLength"`
	RejectDictionaryWords  *bool           `json:"rejectDictionaryWords"`
	RejectKeyboardPatterns *bool           `json:"rejectKeyboardPatterns"`
	RejectUserInfo         *bool           `json:"rejectUserInfo"`
	UpdatedAt              *time.Time      `json:"updatedAt"`
	UpdatedBy              *UserInfo       `json:"updatedBy"`
}
