package shared

import (
	"time"
)

type GetVocabularyFilterResponse struct {
	DownloadURI          *string           `json:"DownloadUri,omitempty"`
	LanguageCode         *LanguageCodeEnum `json:"LanguageCode,omitempty"`
	LastModifiedTime     *time.Time        `json:"LastModifiedTime,omitempty"`
	VocabularyFilterName *string           `json:"VocabularyFilterName,omitempty"`
}
