package shared

import (
	"time"
)

type MedicalTranscriptionJobSummary struct {
	CompletionTime              *time.Time                            `json:"CompletionTime"`
	ContentIdentificationType   *MedicalContentIdentificationTypeEnum `json:"ContentIdentificationType"`
	CreationTime                *time.Time                            `json:"CreationTime"`
	FailureReason               *string                               `json:"FailureReason"`
	LanguageCode                *LanguageCodeEnum                     `json:"LanguageCode"`
	MedicalTranscriptionJobName *string                               `json:"MedicalTranscriptionJobName"`
	OutputLocationType          *OutputLocationTypeEnum               `json:"OutputLocationType"`
	Specialty                   *SpecialtyEnum                        `json:"Specialty"`
	StartTime                   *time.Time                            `json:"StartTime"`
	TranscriptionJobStatus      *TranscriptionJobStatusEnum           `json:"TranscriptionJobStatus"`
	Type                        *TypeEnum                             `json:"Type"`
}
