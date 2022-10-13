package shared

import (
	"time"
)

type SecretListEntry struct {
	Arn                    *string             `json:"ARN"`
	CreatedDate            *time.Time          `json:"CreatedDate"`
	DeletedDate            *time.Time          `json:"DeletedDate"`
	Description            *string             `json:"Description"`
	KmsKeyID               *string             `json:"KmsKeyId"`
	LastAccessedDate       *time.Time          `json:"LastAccessedDate"`
	LastChangedDate        *time.Time          `json:"LastChangedDate"`
	LastRotatedDate        *time.Time          `json:"LastRotatedDate"`
	Name                   *string             `json:"Name"`
	OwningService          *string             `json:"OwningService"`
	PrimaryRegion          *string             `json:"PrimaryRegion"`
	RotationEnabled        *bool               `json:"RotationEnabled"`
	RotationLambdaArn      *string             `json:"RotationLambdaARN"`
	RotationRules          *RotationRulesType  `json:"RotationRules"`
	SecretVersionsToStages map[string][]string `json:"SecretVersionsToStages"`
	Tags                   []Tag               `json:"Tags"`
}
