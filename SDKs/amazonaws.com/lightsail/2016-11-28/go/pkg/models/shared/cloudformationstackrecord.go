package shared

import (
	"time"
)

// CloudFormationStackRecord
// <p>Describes a CloudFormation stack record created as a result of the <code>create cloud formation stack</code> action.</p> <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p>
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
