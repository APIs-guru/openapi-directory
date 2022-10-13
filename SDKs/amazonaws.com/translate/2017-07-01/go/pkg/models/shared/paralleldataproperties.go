package shared

import (
	"time"
)

type ParallelDataProperties struct {
	Arn                       *string                 `json:"Arn"`
	CreatedAt                 *time.Time              `json:"CreatedAt"`
	Description               *string                 `json:"Description"`
	EncryptionKey             *EncryptionKey          `json:"EncryptionKey"`
	FailedRecordCount         *int64                  `json:"FailedRecordCount"`
	ImportedDataSize          *int64                  `json:"ImportedDataSize"`
	ImportedRecordCount       *int64                  `json:"ImportedRecordCount"`
	LastUpdatedAt             *time.Time              `json:"LastUpdatedAt"`
	LatestUpdateAttemptAt     *time.Time              `json:"LatestUpdateAttemptAt"`
	LatestUpdateAttemptStatus *ParallelDataStatusEnum `json:"LatestUpdateAttemptStatus"`
	Message                   *string                 `json:"Message"`
	Name                      *string                 `json:"Name"`
	ParallelDataConfig        *ParallelDataConfig     `json:"ParallelDataConfig"`
	SkippedRecordCount        *int64                  `json:"SkippedRecordCount"`
	SourceLanguageCode        *string                 `json:"SourceLanguageCode"`
	Status                    *ParallelDataStatusEnum `json:"Status"`
	TargetLanguageCodes       []string                `json:"TargetLanguageCodes"`
}
