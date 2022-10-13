package shared

import (
	"time"
)

type CallAnalyticsJob struct {
	CallAnalyticsJobName    *string                     `json:"CallAnalyticsJobName"`
	CallAnalyticsJobStatus  *CallAnalyticsJobStatusEnum `json:"CallAnalyticsJobStatus"`
	ChannelDefinitions      []ChannelDefinition         `json:"ChannelDefinitions"`
	CompletionTime          *time.Time                  `json:"CompletionTime"`
	CreationTime            *time.Time                  `json:"CreationTime"`
	DataAccessRoleArn       *string                     `json:"DataAccessRoleArn"`
	FailureReason           *string                     `json:"FailureReason"`
	IdentifiedLanguageScore *float32                    `json:"IdentifiedLanguageScore"`
	LanguageCode            *LanguageCodeEnum           `json:"LanguageCode"`
	Media                   *Media                      `json:"Media"`
	MediaFormat             *MediaFormatEnum            `json:"MediaFormat"`
	MediaSampleRateHertz    *int64                      `json:"MediaSampleRateHertz"`
	Settings                *CallAnalyticsJobSettings   `json:"Settings"`
	StartTime               *time.Time                  `json:"StartTime"`
	Transcript              *Transcript                 `json:"Transcript"`
}
