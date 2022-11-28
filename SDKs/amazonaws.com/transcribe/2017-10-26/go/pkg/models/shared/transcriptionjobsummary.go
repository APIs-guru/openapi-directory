package shared

import (
	"time"
)

// TranscriptionJobSummary
// Provides a summary of information about a transcription job.
type TranscriptionJobSummary struct {
	CompletionTime          *time.Time                  `json:"CompletionTime,omitempty"`
	ContentRedaction        *ContentRedaction           `json:"ContentRedaction,omitempty"`
	CreationTime            *time.Time                  `json:"CreationTime,omitempty"`
	FailureReason           *string                     `json:"FailureReason,omitempty"`
	IdentifiedLanguageScore *float32                    `json:"IdentifiedLanguageScore,omitempty"`
	IdentifyLanguage        *bool                       `json:"IdentifyLanguage,omitempty"`
	LanguageCode            *LanguageCodeEnum           `json:"LanguageCode,omitempty"`
	ModelSettings           *ModelSettings              `json:"ModelSettings,omitempty"`
	OutputLocationType      *OutputLocationTypeEnum     `json:"OutputLocationType,omitempty"`
	StartTime               *time.Time                  `json:"StartTime,omitempty"`
	TranscriptionJobName    *string                     `json:"TranscriptionJobName,omitempty"`
	TranscriptionJobStatus  *TranscriptionJobStatusEnum `json:"TranscriptionJobStatus,omitempty"`
}
