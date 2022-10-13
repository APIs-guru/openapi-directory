package shared

import (
	"time"
)

type ReplicationSet struct {
	Arn               *string                  `json:"arn"`
	CreatedBy         string                   `json:"createdBy"`
	CreatedTime       time.Time                `json:"createdTime"`
	DeletionProtected bool                     `json:"deletionProtected"`
	LastModifiedBy    string                   `json:"lastModifiedBy"`
	LastModifiedTime  time.Time                `json:"lastModifiedTime"`
	RegionMap         map[string]RegionInfo    `json:"regionMap"`
	Status            ReplicationSetStatusEnum `json:"status"`
}
