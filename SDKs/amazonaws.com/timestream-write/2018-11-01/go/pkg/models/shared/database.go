package shared

import (
	"time"
)

type Database struct {
	Arn             *string    `json:"Arn"`
	CreationTime    *time.Time `json:"CreationTime"`
	DatabaseName    *string    `json:"DatabaseName"`
	KmsKeyID        *string    `json:"KmsKeyId"`
	LastUpdatedTime *time.Time `json:"LastUpdatedTime"`
	TableCount      *int64     `json:"TableCount"`
}
