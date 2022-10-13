package shared

import (
	"time"
)

type ReplicationStatusType struct {
	KmsKeyID         *string         `json:"KmsKeyId"`
	LastAccessedDate *time.Time      `json:"LastAccessedDate"`
	Region           *string         `json:"Region"`
	Status           *StatusTypeEnum `json:"Status"`
	StatusMessage    *string         `json:"StatusMessage"`
}
