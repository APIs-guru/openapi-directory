package shared

import (
	"time"
)

type CloudFormationStackRecord struct {
	Arn             *string                               `json:"arn,omitempty"`
	CreatedAt       *time.Time                            `json:"createdAt,omitempty"`
	DestinationInfo *DestinationInfo                      `json:"destinationInfo,omitempty"`
	Location        *ResourceLocation                     `json:"location,omitempty"`
	Name            *string                               `json:"name,omitempty"`
	ResourceType    *ResourceTypeEnum                     `json:"resourceType,omitempty"`
	SourceInfo      []CloudFormationStackRecordSourceInfo `json:"sourceInfo,omitempty"`
	State           *RecordStateEnum                      `json:"state,omitempty"`
}
