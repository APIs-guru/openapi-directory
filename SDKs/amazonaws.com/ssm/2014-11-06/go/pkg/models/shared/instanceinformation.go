package shared

import (
	"time"
)

// InstanceInformation
// Describes a filter for a specific list of instances.
type InstanceInformation struct {
	ActivationID                           *string                                `json:"ActivationId,omitempty"`
	AgentVersion                           *string                                `json:"AgentVersion,omitempty"`
	AssociationOverview                    *InstanceAggregatedAssociationOverview `json:"AssociationOverview,omitempty"`
	AssociationStatus                      *string                                `json:"AssociationStatus,omitempty"`
	ComputerName                           *string                                `json:"ComputerName,omitempty"`
	IPAddress                              *string                                `json:"IPAddress,omitempty"`
	IamRole                                *string                                `json:"IamRole,omitempty"`
	InstanceID                             *string                                `json:"InstanceId,omitempty"`
	IsLatestVersion                        *bool                                  `json:"IsLatestVersion,omitempty"`
	LastAssociationExecutionDate           *time.Time                             `json:"LastAssociationExecutionDate,omitempty"`
	LastPingDateTime                       *time.Time                             `json:"LastPingDateTime,omitempty"`
	LastSuccessfulAssociationExecutionDate *time.Time                             `json:"LastSuccessfulAssociationExecutionDate,omitempty"`
	Name                                   *string                                `json:"Name,omitempty"`
	PingStatus                             *PingStatusEnum                        `json:"PingStatus,omitempty"`
	PlatformName                           *string                                `json:"PlatformName,omitempty"`
	PlatformType                           *PlatformTypeEnum                      `json:"PlatformType,omitempty"`
	PlatformVersion                        *string                                `json:"PlatformVersion,omitempty"`
	RegistrationDate                       *time.Time                             `json:"RegistrationDate,omitempty"`
	ResourceType                           *ResourceTypeEnum                      `json:"ResourceType,omitempty"`
}
