package shared

import (
	"time"
)

// VocabularyFilterInfo
// Provides information about a vocabulary filter.
type VocabularyFilterInfo struct {
	LanguageCode         *LanguageCodeEnum `json:"LanguageCode,omitempty"`
	LastModifiedTime     *time.Time        `json:"LastModifiedTime,omitempty"`
	VocabularyFilterName *string           `json:"VocabularyFilterName,omitempty"`
}
