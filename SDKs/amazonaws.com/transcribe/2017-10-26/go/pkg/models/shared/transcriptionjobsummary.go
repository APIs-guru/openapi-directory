package shared

import (
	"time"
)

type TranscriptionJobSummary struct {
	CompletionTime          *time.Time                  `json:"CompletionTime"`
	ContentRedaction        *ContentRedaction           `json:"ContentRedaction"`
	CreationTime            *time.Time                  `json:"CreationTime"`
	FailureReason           *string                     `json:"FailureReason"`
	IdentifiedLanguageScore *float32                    `json:"IdentifiedLanguageScore"`
	IdentifyLanguage        *bool                       `json:"IdentifyLanguage"`
	LanguageCode            *LanguageCodeEnum           `json:"LanguageCode"`
	ModelSettings           *ModelSettings              `json:"ModelSettings"`
	OutputLocationType      *OutputLocationTypeEnum     `json:"OutputLocationType"`
	StartTime               *time.Time                  `json:"StartTime"`
	TranscriptionJobName    *string                     `json:"TranscriptionJobName"`
	TranscriptionJobStatus  *TranscriptionJobStatusEnum `json:"TranscriptionJobStatus"`
}
