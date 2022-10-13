package shared

import (
	"time"
)

type VocabularyFilterInfo struct {
	LanguageCode         *LanguageCodeEnum `json:"LanguageCode"`
	LastModifiedTime     *time.Time        `json:"LastModifiedTime"`
	VocabularyFilterName *string           `json:"VocabularyFilterName"`
}
