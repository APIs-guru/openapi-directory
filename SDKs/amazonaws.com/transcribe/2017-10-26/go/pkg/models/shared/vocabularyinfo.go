package shared

import (
	"time"
)

type VocabularyInfo struct {
	LanguageCode     *LanguageCodeEnum    `json:"LanguageCode,omitempty"`
	LastModifiedTime *time.Time           `json:"LastModifiedTime,omitempty"`
	VocabularyName   *string              `json:"VocabularyName,omitempty"`
	VocabularyState  *VocabularyStateEnum `json:"VocabularyState,omitempty"`
}
