package shared

import (
	"time"
)

// ProvisionedProductAttribute
// Information about a provisioned product.
type ProvisionedProductAttribute struct {
	Arn                                *string                       `json:"Arn,omitempty"`
	CreatedTime                        *time.Time                    `json:"CreatedTime,omitempty"`
	ID                                 *string                       `json:"Id,omitempty"`
	IdempotencyToken                   *string                       `json:"IdempotencyToken,omitempty"`
	LastProvisioningRecordID           *string                       `json:"LastProvisioningRecordId,omitempty"`
	LastRecordID                       *string                       `json:"LastRecordId,omitempty"`
	LastSuccessfulProvisioningRecordID *string                       `json:"LastSuccessfulProvisioningRecordId,omitempty"`
	Name                               *string                       `json:"Name,omitempty"`
	PhysicalID                         *string                       `json:"PhysicalId,omitempty"`
	ProductID                          *string                       `json:"ProductId,omitempty"`
	ProductName                        *string                       `json:"ProductName,omitempty"`
	ProvisioningArtifactID             *string                       `json:"ProvisioningArtifactId,omitempty"`
	ProvisioningArtifactName           *string                       `json:"ProvisioningArtifactName,omitempty"`
	Status                             *ProvisionedProductStatusEnum `json:"Status,omitempty"`
	StatusMessage                      *string                       `json:"StatusMessage,omitempty"`
	Tags                               []Tag                         `json:"Tags,omitempty"`
	Type                               *string                       `json:"Type,omitempty"`
	UserArn                            *string                       `json:"UserArn,omitempty"`
	UserArnSession                     *string                       `json:"UserArnSession,omitempty"`
}
