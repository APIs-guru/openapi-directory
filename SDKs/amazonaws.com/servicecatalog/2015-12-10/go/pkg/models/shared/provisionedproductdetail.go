package shared

import (
	"time"
)

type ProvisionedProductDetail struct {
	Arn                                *string                       `json:"Arn,omitempty"`
	CreatedTime                        *time.Time                    `json:"CreatedTime,omitempty"`
	ID                                 *string                       `json:"Id,omitempty"`
	IdempotencyToken                   *string                       `json:"IdempotencyToken,omitempty"`
	LastProvisioningRecordID           *string                       `json:"LastProvisioningRecordId,omitempty"`
	LastRecordID                       *string                       `json:"LastRecordId,omitempty"`
	LastSuccessfulProvisioningRecordID *string                       `json:"LastSuccessfulProvisioningRecordId,omitempty"`
	LaunchRoleArn                      *string                       `json:"LaunchRoleArn,omitempty"`
	Name                               *string                       `json:"Name,omitempty"`
	ProductID                          *string                       `json:"ProductId,omitempty"`
	ProvisioningArtifactID             *string                       `json:"ProvisioningArtifactId,omitempty"`
	Status                             *ProvisionedProductStatusEnum `json:"Status,omitempty"`
	StatusMessage                      *string                       `json:"StatusMessage,omitempty"`
	Type                               *string                       `json:"Type,omitempty"`
}
