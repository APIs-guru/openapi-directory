package shared

import (
	"time"
)

type DescribeSecretResponse struct {
	Arn                *string                 `json:"ARN"`
	CreatedDate        *time.Time              `json:"CreatedDate"`
	DeletedDate        *time.Time              `json:"DeletedDate"`
	Description        *string                 `json:"Description"`
	KmsKeyID           *string                 `json:"KmsKeyId"`
	LastAccessedDate   *time.Time              `json:"LastAccessedDate"`
	LastChangedDate    *time.Time              `json:"LastChangedDate"`
	LastRotatedDate    *time.Time              `json:"LastRotatedDate"`
	Name               *string                 `json:"Name"`
	OwningService      *string                 `json:"OwningService"`
	PrimaryRegion      *string                 `json:"PrimaryRegion"`
	ReplicationStatus  []ReplicationStatusType `json:"ReplicationStatus"`
	RotationEnabled    *bool                   `json:"RotationEnabled"`
	RotationLambdaArn  *string                 `json:"RotationLambdaARN"`
	RotationRules      *RotationRulesType      `json:"RotationRules"`
	Tags               []Tag                   `json:"Tags"`
	VersionIdsToStages map[string][]string     `json:"VersionIdsToStages"`
}
