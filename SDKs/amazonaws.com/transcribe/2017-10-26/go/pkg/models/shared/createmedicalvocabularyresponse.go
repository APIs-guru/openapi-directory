package shared

import (
	"time"
)

type CreateMedicalVocabularyResponse struct {
	FailureReason    *string              `json:"FailureReason"`
	LanguageCode     *LanguageCodeEnum    `json:"LanguageCode"`
	LastModifiedTime *time.Time           `json:"LastModifiedTime"`
	VocabularyName   *string              `json:"VocabularyName"`
	VocabularyState  *VocabularyStateEnum `json:"VocabularyState"`
}
