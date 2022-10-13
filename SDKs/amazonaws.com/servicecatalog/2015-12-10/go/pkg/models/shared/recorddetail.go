package shared

import (
	"time"
)

type RecordDetail struct {
	CreatedTime            *time.Time        `json:"CreatedTime"`
	LaunchRoleArn          *string           `json:"LaunchRoleArn"`
	PathID                 *string           `json:"PathId"`
	ProductID              *string           `json:"ProductId"`
	ProvisionedProductID   *string           `json:"ProvisionedProductId"`
	ProvisionedProductName *string           `json:"ProvisionedProductName"`
	ProvisionedProductType *string           `json:"ProvisionedProductType"`
	ProvisioningArtifactID *string           `json:"ProvisioningArtifactId"`
	RecordErrors           []RecordError     `json:"RecordErrors"`
	RecordID               *string           `json:"RecordId"`
	RecordTags             []RecordTag       `json:"RecordTags"`
	RecordType             *string           `json:"RecordType"`
	Status                 *RecordStatusEnum `json:"Status"`
	UpdatedTime            *time.Time        `json:"UpdatedTime"`
}
