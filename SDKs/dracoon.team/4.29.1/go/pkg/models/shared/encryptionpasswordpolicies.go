package shared

import (
	"time"
)

type EncryptionPasswordPolicies struct {
	CharacterRules         *CharacterRules `json:"characterRules,omitempty"`
	MinLength              *int32          `json:"minLength,omitempty"`
	RejectKeyboardPatterns *bool           `json:"rejectKeyboardPatterns,omitempty"`
	RejectUserInfo         *bool           `json:"rejectUserInfo,omitempty"`
	UpdatedAt              *time.Time      `json:"updatedAt,omitempty"`
	UpdatedBy              *UserInfo       `json:"updatedBy,omitempty"`
}
