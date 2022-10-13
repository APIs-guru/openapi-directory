package shared

import (
	"time"
)

type MedicalTranscriptionJob struct {
	CompletionTime              *time.Time                            `json:"CompletionTime"`
	ContentIdentificationType   *MedicalContentIdentificationTypeEnum `json:"ContentIdentificationType"`
	CreationTime                *time.Time                            `json:"CreationTime"`
	FailureReason               *string                               `json:"FailureReason"`
	LanguageCode                *LanguageCodeEnum                     `json:"LanguageCode"`
	Media                       *Media                                `json:"Media"`
	MediaFormat                 *MediaFormatEnum                      `json:"MediaFormat"`
	MediaSampleRateHertz        *int64                                `json:"MediaSampleRateHertz"`
	MedicalTranscriptionJobName *string                               `json:"MedicalTranscriptionJobName"`
	Settings                    *MedicalTranscriptionSetting          `json:"Settings"`
	Specialty                   *SpecialtyEnum                        `json:"Specialty"`
	StartTime                   *time.Time                            `json:"StartTime"`
	Tags                        []Tag                                 `json:"Tags"`
	Transcript                  *MedicalTranscript                    `json:"Transcript"`
	TranscriptionJobStatus      *TranscriptionJobStatusEnum           `json:"TranscriptionJobStatus"`
	Type                        *TypeEnum                             `json:"Type"`
}
