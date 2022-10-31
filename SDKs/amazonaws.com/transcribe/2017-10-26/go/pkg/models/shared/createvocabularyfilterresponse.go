package shared

import (
	"time"
)

type CreateVocabularyFilterResponse struct {
	LanguageCode         *LanguageCodeEnum `json:"LanguageCode,omitempty"`
	LastModifiedTime     *time.Time        `json:"LastModifiedTime,omitempty"`
	VocabularyFilterName *string           `json:"VocabularyFilterName,omitempty"`
}
