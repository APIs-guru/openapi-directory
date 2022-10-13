package shared

import (
	"time"
)

type UpdateVocabularyFilterResponse struct {
	LanguageCode         *LanguageCodeEnum `json:"LanguageCode"`
	LastModifiedTime     *time.Time        `json:"LastModifiedTime"`
	VocabularyFilterName *string           `json:"VocabularyFilterName"`
}
