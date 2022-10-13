package shared

import (
	"time"
)

type GetMedicalVocabularyResponse struct {
	DownloadURI      *string              `json:"DownloadUri"`
	FailureReason    *string              `json:"FailureReason"`
	LanguageCode     *LanguageCodeEnum    `json:"LanguageCode"`
	LastModifiedTime *time.Time           `json:"LastModifiedTime"`
	VocabularyName   *string              `json:"VocabularyName"`
	VocabularyState  *VocabularyStateEnum `json:"VocabularyState"`
}
