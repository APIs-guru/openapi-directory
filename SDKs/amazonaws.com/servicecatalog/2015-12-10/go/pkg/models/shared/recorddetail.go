package shared

import (
"time")

type RecordDetail struct {
    CreatedTime *time.Time `json:"CreatedTime,omitempty"`
    LaunchRoleArn *string `json:"LaunchRoleArn,omitempty"`
    PathID *string `json:"PathId,omitempty"`
    ProductID *string `json:"ProductId,omitempty"`
    ProvisionedProductID *string `json:"ProvisionedProductId,omitempty"`
    ProvisionedProductName *string `json:"ProvisionedProductName,omitempty"`
    ProvisionedProductType *string `json:"ProvisionedProductType,omitempty"`
    ProvisioningArtifactID *string `json:"ProvisioningArtifactId,omitempty"`
    RecordErrors []RecordError `json:"RecordErrors,omitempty"`
    RecordID *string `json:"RecordId,omitempty"`
    RecordTags []RecordTag `json:"RecordTags,omitempty"`
    RecordType *string `json:"RecordType,omitempty"`
    Status *RecordStatusEnum `json:"Status,omitempty"`
    UpdatedTime *time.Time `json:"UpdatedTime,omitempty"`
    
}

