package shared

import (
	"time"
)

type InstanceInformation struct {
	ActivationID                           *string                                `json:"ActivationId"`
	AgentVersion                           *string                                `json:"AgentVersion"`
	AssociationOverview                    *InstanceAggregatedAssociationOverview `json:"AssociationOverview"`
	AssociationStatus                      *string                                `json:"AssociationStatus"`
	ComputerName                           *string                                `json:"ComputerName"`
	IPAddress                              *string                                `json:"IPAddress"`
	IamRole                                *string                                `json:"IamRole"`
	InstanceID                             *string                                `json:"InstanceId"`
	IsLatestVersion                        *bool                                  `json:"IsLatestVersion"`
	LastAssociationExecutionDate           *time.Time                             `json:"LastAssociationExecutionDate"`
	LastPingDateTime                       *time.Time                             `json:"LastPingDateTime"`
	LastSuccessfulAssociationExecutionDate *time.Time                             `json:"LastSuccessfulAssociationExecutionDate"`
	Name                                   *string                                `json:"Name"`
	PingStatus                             *PingStatusEnum                        `json:"PingStatus"`
	PlatformName                           *string                                `json:"PlatformName"`
	PlatformType                           *PlatformTypeEnum                      `json:"PlatformType"`
	PlatformVersion                        *string                                `json:"PlatformVersion"`
	RegistrationDate                       *time.Time                             `json:"RegistrationDate"`
	ResourceType                           *ResourceTypeEnum                      `json:"ResourceType"`
}
