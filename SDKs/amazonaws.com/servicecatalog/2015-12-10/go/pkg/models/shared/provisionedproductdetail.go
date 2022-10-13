package shared

import (
	"time"
)

type ProvisionedProductDetail struct {
	Arn                                *string                       `json:"Arn"`
	CreatedTime                        *time.Time                    `json:"CreatedTime"`
	ID                                 *string                       `json:"Id"`
	IdempotencyToken                   *string                       `json:"IdempotencyToken"`
	LastProvisioningRecordID           *string                       `json:"LastProvisioningRecordId"`
	LastRecordID                       *string                       `json:"LastRecordId"`
	LastSuccessfulProvisioningRecordID *string                       `json:"LastSuccessfulProvisioningRecordId"`
	LaunchRoleArn                      *string                       `json:"LaunchRoleArn"`
	Name                               *string                       `json:"Name"`
	ProductID                          *string                       `json:"ProductId"`
	ProvisioningArtifactID             *string                       `json:"ProvisioningArtifactId"`
	Status                             *ProvisionedProductStatusEnum `json:"Status"`
	StatusMessage                      *string                       `json:"StatusMessage"`
	Type                               *string                       `json:"Type"`
}
