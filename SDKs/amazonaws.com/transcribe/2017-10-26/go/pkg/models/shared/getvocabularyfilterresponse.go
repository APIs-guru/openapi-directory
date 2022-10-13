package shared

import (
	"time"
)

type GetVocabularyFilterResponse struct {
	DownloadURI          *string           `json:"DownloadUri"`
	LanguageCode         *LanguageCodeEnum `json:"LanguageCode"`
	LastModifiedTime     *time.Time        `json:"LastModifiedTime"`
	VocabularyFilterName *string           `json:"VocabularyFilterName"`
}
