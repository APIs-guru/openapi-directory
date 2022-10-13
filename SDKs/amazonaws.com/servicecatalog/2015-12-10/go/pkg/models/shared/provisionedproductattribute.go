package shared

import (
	"time"
)

type ProvisionedProductAttribute struct {
	Arn                                *string                       `json:"Arn"`
	CreatedTime                        *time.Time                    `json:"CreatedTime"`
	ID                                 *string                       `json:"Id"`
	IdempotencyToken                   *string                       `json:"IdempotencyToken"`
	LastProvisioningRecordID           *string                       `json:"LastProvisioningRecordId"`
	LastRecordID                       *string                       `json:"LastRecordId"`
	LastSuccessfulProvisioningRecordID *string                       `json:"LastSuccessfulProvisioningRecordId"`
	Name                               *string                       `json:"Name"`
	PhysicalID                         *string                       `json:"PhysicalId"`
	ProductID                          *string                       `json:"ProductId"`
	ProductName                        *string                       `json:"ProductName"`
	ProvisioningArtifactID             *string                       `json:"ProvisioningArtifactId"`
	ProvisioningArtifactName           *string                       `json:"ProvisioningArtifactName"`
	Status                             *ProvisionedProductStatusEnum `json:"Status"`
	StatusMessage                      *string                       `json:"StatusMessage"`
	Tags                               []Tag                         `json:"Tags"`
	Type                               *string                       `json:"Type"`
	UserArn                            *string                       `json:"UserArn"`
	UserArnSession                     *string                       `json:"UserArnSession"`
}
