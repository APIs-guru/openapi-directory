package shared

import (
	"time"
)

type MedicalTranscriptionJobSummary struct {
	CompletionTime              *time.Time                            `json:"CompletionTime,omitempty"`
	ContentIdentificationType   *MedicalContentIdentificationTypeEnum `json:"ContentIdentificationType,omitempty"`
	CreationTime                *time.Time                            `json:"CreationTime,omitempty"`
	FailureReason               *string                               `json:"FailureReason,omitempty"`
	LanguageCode                *LanguageCodeEnum                     `json:"LanguageCode,omitempty"`
	MedicalTranscriptionJobName *string                               `json:"MedicalTranscriptionJobName,omitempty"`
	OutputLocationType          *OutputLocationTypeEnum               `json:"OutputLocationType,omitempty"`
	Specialty                   *SpecialtyEnum                        `json:"Specialty,omitempty"`
	StartTime                   *time.Time                            `json:"StartTime,omitempty"`
	TranscriptionJobStatus      *TranscriptionJobStatusEnum           `json:"TranscriptionJobStatus,omitempty"`
	Type                        *TypeEnum                             `json:"Type,omitempty"`
}
