package shared

import (
	"time"
)

type DescribeSecretResponse struct {
	Arn                *string                 `json:"ARN,omitempty"`
	CreatedDate        *time.Time              `json:"CreatedDate,omitempty"`
	DeletedDate        *time.Time              `json:"DeletedDate,omitempty"`
	Description        *string                 `json:"Description,omitempty"`
	KmsKeyID           *string                 `json:"KmsKeyId,omitempty"`
	LastAccessedDate   *time.Time              `json:"LastAccessedDate,omitempty"`
	LastChangedDate    *time.Time              `json:"LastChangedDate,omitempty"`
	LastRotatedDate    *time.Time              `json:"LastRotatedDate,omitempty"`
	Name               *string                 `json:"Name,omitempty"`
	OwningService      *string                 `json:"OwningService,omitempty"`
	PrimaryRegion      *string                 `json:"PrimaryRegion,omitempty"`
	ReplicationStatus  []ReplicationStatusType `json:"ReplicationStatus,omitempty"`
	RotationEnabled    *bool                   `json:"RotationEnabled,omitempty"`
	RotationLambdaArn  *string                 `json:"RotationLambdaARN,omitempty"`
	RotationRules      *RotationRulesType      `json:"RotationRules,omitempty"`
	Tags               []Tag                   `json:"Tags,omitempty"`
	VersionIdsToStages map[string][]string     `json:"VersionIdsToStages,omitempty"`
}
