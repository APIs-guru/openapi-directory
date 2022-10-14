package shared

import (
	"time"
)

type LicenseOperationFailure struct {
	ErrorMessage         *string           `json:"ErrorMessage,omitempty"`
	FailureTime          *time.Time        `json:"FailureTime,omitempty"`
	MetadataList         []Metadata        `json:"MetadataList,omitempty"`
	OperationName        *string           `json:"OperationName,omitempty"`
	OperationRequestedBy *string           `json:"OperationRequestedBy,omitempty"`
	ResourceArn          *string           `json:"ResourceArn,omitempty"`
	ResourceOwnerID      *string           `json:"ResourceOwnerId,omitempty"`
	ResourceType         *ResourceTypeEnum `json:"ResourceType,omitempty"`
}
