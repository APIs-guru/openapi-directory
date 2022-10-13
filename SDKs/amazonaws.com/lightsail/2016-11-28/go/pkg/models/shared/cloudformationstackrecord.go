package shared

import (
	"time"
)

type CloudFormationStackRecord struct {
	Arn             *string                               `json:"arn"`
	CreatedAt       *time.Time                            `json:"createdAt"`
	DestinationInfo *DestinationInfo                      `json:"destinationInfo"`
	Location        *ResourceLocation                     `json:"location"`
	Name            *string                               `json:"name"`
	ResourceType    *ResourceTypeEnum                     `json:"resourceType"`
	SourceInfo      []CloudFormationStackRecordSourceInfo `json:"sourceInfo"`
	State           *RecordStateEnum                      `json:"state"`
}
