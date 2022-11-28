package shared

import (
	"time"
)

// ParallelDataProperties
// The properties of a parallel data resource.
type ParallelDataProperties struct {
	Arn                       *string                 `json:"Arn,omitempty"`
	CreatedAt                 *time.Time              `json:"CreatedAt,omitempty"`
	Description               *string                 `json:"Description,omitempty"`
	EncryptionKey             *EncryptionKey          `json:"EncryptionKey,omitempty"`
	FailedRecordCount         *int64                  `json:"FailedRecordCount,omitempty"`
	ImportedDataSize          *int64                  `json:"ImportedDataSize,omitempty"`
	ImportedRecordCount       *int64                  `json:"ImportedRecordCount,omitempty"`
	LastUpdatedAt             *time.Time              `json:"LastUpdatedAt,omitempty"`
	LatestUpdateAttemptAt     *time.Time              `json:"LatestUpdateAttemptAt,omitempty"`
	LatestUpdateAttemptStatus *ParallelDataStatusEnum `json:"LatestUpdateAttemptStatus,omitempty"`
	Message                   *string                 `json:"Message,omitempty"`
	Name                      *string                 `json:"Name,omitempty"`
	ParallelDataConfig        *ParallelDataConfig     `json:"ParallelDataConfig,omitempty"`
	SkippedRecordCount        *int64                  `json:"SkippedRecordCount,omitempty"`
	SourceLanguageCode        *string                 `json:"SourceLanguageCode,omitempty"`
	Status                    *ParallelDataStatusEnum `json:"Status,omitempty"`
	TargetLanguageCodes       []string                `json:"TargetLanguageCodes,omitempty"`
}
