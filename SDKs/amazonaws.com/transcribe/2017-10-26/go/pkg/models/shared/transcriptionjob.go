package shared

import (
"time")

type TranscriptionJob struct {
    CompletionTime *time.Time `json:"CompletionTime,omitempty"`
    ContentRedaction *ContentRedaction `json:"ContentRedaction,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    IdentifiedLanguageScore *float32 `json:"IdentifiedLanguageScore,omitempty"`
    IdentifyLanguage *bool `json:"IdentifyLanguage,omitempty"`
    JobExecutionSettings *JobExecutionSettings `json:"JobExecutionSettings,omitempty"`
    LanguageCode *LanguageCodeEnum `json:"LanguageCode,omitempty"`
    LanguageOptions []LanguageCodeEnum `json:"LanguageOptions,omitempty"`
    Media *Media `json:"Media,omitempty"`
    MediaFormat *MediaFormatEnum `json:"MediaFormat,omitempty"`
    MediaSampleRateHertz *int64 `json:"MediaSampleRateHertz,omitempty"`
    ModelSettings *ModelSettings `json:"ModelSettings,omitempty"`
    Settings *Settings `json:"Settings,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    Subtitles *SubtitlesOutput `json:"Subtitles,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    Transcript *Transcript `json:"Transcript,omitempty"`
    TranscriptionJobName *string `json:"TranscriptionJobName,omitempty"`
    TranscriptionJobStatus *TranscriptionJobStatusEnum `json:"TranscriptionJobStatus,omitempty"`
    
}

