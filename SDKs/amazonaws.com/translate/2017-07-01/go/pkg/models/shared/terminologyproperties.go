package shared

import (
	"time"
)

type TerminologyProperties struct {
	Arn                 *string        `json:"Arn"`
	CreatedAt           *time.Time     `json:"CreatedAt"`
	Description         *string        `json:"Description"`
	EncryptionKey       *EncryptionKey `json:"EncryptionKey"`
	LastUpdatedAt       *time.Time     `json:"LastUpdatedAt"`
	Name                *string        `json:"Name"`
	SizeBytes           *int64         `json:"SizeBytes"`
	SourceLanguageCode  *string        `json:"SourceLanguageCode"`
	TargetLanguageCodes []string       `json:"TargetLanguageCodes"`
	TermCount           *int64         `json:"TermCount"`
}
