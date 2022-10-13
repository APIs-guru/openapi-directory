package shared

import (
	"time"
)

type UpdateVocabularyResponse struct {
	LanguageCode     *LanguageCodeEnum    `json:"LanguageCode"`
	LastModifiedTime *time.Time           `json:"LastModifiedTime"`
	VocabularyName   *string              `json:"VocabularyName"`
	VocabularyState  *VocabularyStateEnum `json:"VocabularyState"`
}
