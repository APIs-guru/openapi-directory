package shared

import (
	"time"
)

type LicenseOperationFailure struct {
	ErrorMessage         *string           `json:"ErrorMessage"`
	FailureTime          *time.Time        `json:"FailureTime"`
	MetadataList         []Metadata        `json:"MetadataList"`
	OperationName        *string           `json:"OperationName"`
	OperationRequestedBy *string           `json:"OperationRequestedBy"`
	ResourceArn          *string           `json:"ResourceArn"`
	ResourceOwnerID      *string           `json:"ResourceOwnerId"`
	ResourceType         *ResourceTypeEnum `json:"ResourceType"`
}
