package shared

import (
	"time"
)

type CallAnalyticsJob struct {
	CallAnalyticsJobName    *string                     `json:"CallAnalyticsJobName,omitempty"`
	CallAnalyticsJobStatus  *CallAnalyticsJobStatusEnum `json:"CallAnalyticsJobStatus,omitempty"`
	ChannelDefinitions      []ChannelDefinition         `json:"ChannelDefinitions,omitempty"`
	CompletionTime          *time.Time                  `json:"CompletionTime,omitempty"`
	CreationTime            *time.Time                  `json:"CreationTime,omitempty"`
	DataAccessRoleArn       *string                     `json:"DataAccessRoleArn,omitempty"`
	FailureReason           *string                     `json:"FailureReason,omitempty"`
	IdentifiedLanguageScore *float32                    `json:"IdentifiedLanguageScore,omitempty"`
	LanguageCode            *LanguageCodeEnum           `json:"LanguageCode,omitempty"`
	Media                   *Media                      `json:"Media,omitempty"`
	MediaFormat             *MediaFormatEnum            `json:"MediaFormat,omitempty"`
	MediaSampleRateHertz    *int64                      `json:"MediaSampleRateHertz,omitempty"`
	Settings                *CallAnalyticsJobSettings   `json:"Settings,omitempty"`
	StartTime               *time.Time                  `json:"StartTime,omitempty"`
	Transcript              *Transcript                 `json:"Transcript,omitempty"`
}
