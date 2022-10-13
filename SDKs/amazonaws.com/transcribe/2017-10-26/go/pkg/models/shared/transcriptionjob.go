package shared

import (
	"time"
)

type TranscriptionJob struct {
	CompletionTime          *time.Time                  `json:"CompletionTime"`
	ContentRedaction        *ContentRedaction           `json:"ContentRedaction"`
	CreationTime            *time.Time                  `json:"CreationTime"`
	FailureReason           *string                     `json:"FailureReason"`
	IdentifiedLanguageScore *float32                    `json:"IdentifiedLanguageScore"`
	IdentifyLanguage        *bool                       `json:"IdentifyLanguage"`
	JobExecutionSettings    *JobExecutionSettings       `json:"JobExecutionSettings"`
	LanguageCode            *LanguageCodeEnum           `json:"LanguageCode"`
	LanguageOptions         []LanguageCodeEnum          `json:"LanguageOptions"`
	Media                   *Media                      `json:"Media"`
	MediaFormat             *MediaFormatEnum            `json:"MediaFormat"`
	MediaSampleRateHertz    *int64                      `json:"MediaSampleRateHertz"`
	ModelSettings           *ModelSettings              `json:"ModelSettings"`
	Settings                *Settings                   `json:"Settings"`
	StartTime               *time.Time                  `json:"StartTime"`
	Subtitles               *SubtitlesOutput            `json:"Subtitles"`
	Tags                    []Tag                       `json:"Tags"`
	Transcript              *Transcript                 `json:"Transcript"`
	TranscriptionJobName    *string                     `json:"TranscriptionJobName"`
	TranscriptionJobStatus  *TranscriptionJobStatusEnum `json:"TranscriptionJobStatus"`
}
