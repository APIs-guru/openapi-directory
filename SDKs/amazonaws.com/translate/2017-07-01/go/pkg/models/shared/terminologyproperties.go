package shared

import (
	"time"
)

type TerminologyProperties struct {
	Arn                 *string        `json:"Arn,omitempty"`
	CreatedAt           *time.Time     `json:"CreatedAt,omitempty"`
	Description         *string        `json:"Description,omitempty"`
	EncryptionKey       *EncryptionKey `json:"EncryptionKey,omitempty"`
	LastUpdatedAt       *time.Time     `json:"LastUpdatedAt,omitempty"`
	Name                *string        `json:"Name,omitempty"`
	SizeBytes           *int64         `json:"SizeBytes,omitempty"`
	SourceLanguageCode  *string        `json:"SourceLanguageCode,omitempty"`
	TargetLanguageCodes []string       `json:"TargetLanguageCodes,omitempty"`
	TermCount           *int64         `json:"TermCount,omitempty"`
}
