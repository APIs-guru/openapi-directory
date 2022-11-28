package shared

import (
	"time"
)

// MedicalTranscriptionJob
// The data structure that contains the information for a medical transcription job.
type MedicalTranscriptionJob struct {
	CompletionTime              *time.Time                            `json:"CompletionTime,omitempty"`
	ContentIdentificationType   *MedicalContentIdentificationTypeEnum `json:"ContentIdentificationType,omitempty"`
	CreationTime                *time.Time                            `json:"CreationTime,omitempty"`
	FailureReason               *string                               `json:"FailureReason,omitempty"`
	LanguageCode                *LanguageCodeEnum                     `json:"LanguageCode,omitempty"`
	Media                       *Media                                `json:"Media,omitempty"`
	MediaFormat                 *MediaFormatEnum                      `json:"MediaFormat,omitempty"`
	MediaSampleRateHertz        *int64                                `json:"MediaSampleRateHertz,omitempty"`
	MedicalTranscriptionJobName *string                               `json:"MedicalTranscriptionJobName,omitempty"`
	Settings                    *MedicalTranscriptionSetting          `json:"Settings,omitempty"`
	Specialty                   *SpecialtyEnum                        `json:"Specialty,omitempty"`
	StartTime                   *time.Time                            `json:"StartTime,omitempty"`
	Tags                        []Tag                                 `json:"Tags,omitempty"`
	Transcript                  *MedicalTranscript                    `json:"Transcript,omitempty"`
	TranscriptionJobStatus      *TranscriptionJobStatusEnum           `json:"TranscriptionJobStatus,omitempty"`
	Type                        *TypeEnum                             `json:"Type,omitempty"`
}
