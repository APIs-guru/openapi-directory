package shared

import (
	"time"
)

// ReplicationSet
// The set of Regions that your Incident Manager data will be replicated to and the KMS key used to encrypt the data.
type ReplicationSet struct {
	Arn               *string                  `json:"arn,omitempty"`
	CreatedBy         string                   `json:"createdBy"`
	CreatedTime       time.Time                `json:"createdTime"`
	DeletionProtected bool                     `json:"deletionProtected"`
	LastModifiedBy    string                   `json:"lastModifiedBy"`
	LastModifiedTime  time.Time                `json:"lastModifiedTime"`
	RegionMap         map[string]RegionInfo    `json:"regionMap"`
	Status            ReplicationSetStatusEnum `json:"status"`
}
