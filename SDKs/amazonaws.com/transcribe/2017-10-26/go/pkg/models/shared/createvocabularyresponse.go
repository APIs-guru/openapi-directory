package shared

import (
"time")

type CreateVocabularyResponse struct {
    FailureReason *string `json:"FailureReason,omitempty"`
    LanguageCode *LanguageCodeEnum `json:"LanguageCode,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    VocabularyName *string `json:"VocabularyName,omitempty"`
    VocabularyState *VocabularyStateEnum `json:"VocabularyState,omitempty"`
    
}

