package shared

import (
	"time"
)

type Database struct {
	Arn             *string    `json:"Arn,omitempty"`
	CreationTime    *time.Time `json:"CreationTime,omitempty"`
	DatabaseName    *string    `json:"DatabaseName,omitempty"`
	KmsKeyID        *string    `json:"KmsKeyId,omitempty"`
	LastUpdatedTime *time.Time `json:"LastUpdatedTime,omitempty"`
	TableCount      *int64     `json:"TableCount,omitempty"`
}
