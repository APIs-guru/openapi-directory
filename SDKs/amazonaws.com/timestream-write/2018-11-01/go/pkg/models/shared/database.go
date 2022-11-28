package shared

import (
	"time"
)

// Database
// A top level container for a table. Databases and tables are the fundamental management concepts in Amazon Timestream. All tables in a database are encrypted with the same KMS key.
type Database struct {
	Arn             *string    `json:"Arn,omitempty"`
	CreationTime    *time.Time `json:"CreationTime,omitempty"`
	DatabaseName    *string    `json:"DatabaseName,omitempty"`
	KmsKeyID        *string    `json:"KmsKeyId,omitempty"`
	LastUpdatedTime *time.Time `json:"LastUpdatedTime,omitempty"`
	TableCount      *int64     `json:"TableCount,omitempty"`
}
