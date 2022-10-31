package shared

import (
"time")

type GetMedicalVocabularyResponse struct {
    DownloadURI *string `json:"DownloadUri,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    LanguageCode *LanguageCodeEnum `json:"LanguageCode,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    VocabularyName *string `json:"VocabularyName,omitempty"`
    VocabularyState *VocabularyStateEnum `json:"VocabularyState,omitempty"`
    
}

