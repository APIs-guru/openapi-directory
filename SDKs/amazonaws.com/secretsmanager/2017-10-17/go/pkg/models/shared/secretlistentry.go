package shared

import (
	"time"
)

type SecretListEntry struct {
	Arn                    *string             `json:"ARN,omitempty"`
	CreatedDate            *time.Time          `json:"CreatedDate,omitempty"`
	DeletedDate            *time.Time          `json:"DeletedDate,omitempty"`
	Description            *string             `json:"Description,omitempty"`
	KmsKeyID               *string             `json:"KmsKeyId,omitempty"`
	LastAccessedDate       *time.Time          `json:"LastAccessedDate,omitempty"`
	LastChangedDate        *time.Time          `json:"LastChangedDate,omitempty"`
	LastRotatedDate        *time.Time          `json:"LastRotatedDate,omitempty"`
	Name                   *string             `json:"Name,omitempty"`
	OwningService          *string             `json:"OwningService,omitempty"`
	PrimaryRegion          *string             `json:"PrimaryRegion,omitempty"`
	RotationEnabled        *bool               `json:"RotationEnabled,omitempty"`
	RotationLambdaArn      *string             `json:"RotationLambdaARN,omitempty"`
	RotationRules          *RotationRulesType  `json:"RotationRules,omitempty"`
	SecretVersionsToStages map[string][]string `json:"SecretVersionsToStages,omitempty"`
	Tags                   []Tag               `json:"Tags,omitempty"`
}
