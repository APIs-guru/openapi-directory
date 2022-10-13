package shared

import (
	"time"
)

type ContainerService struct {
	Arn                  *string                        `json:"arn"`
	ContainerServiceName *string                        `json:"containerServiceName"`
	CreatedAt            *time.Time                     `json:"createdAt"`
	CurrentDeployment    *ContainerServiceDeployment    `json:"currentDeployment"`
	IsDisabled           *bool                          `json:"isDisabled"`
	Location             *ResourceLocation              `json:"location"`
	NextDeployment       *ContainerServiceDeployment    `json:"nextDeployment"`
	Power                *ContainerServicePowerNameEnum `json:"power"`
	PowerID              *string                        `json:"powerId"`
	PrincipalArn         *string                        `json:"principalArn"`
	PrivateDomainName    *string                        `json:"privateDomainName"`
	PublicDomainNames    map[string][]string            `json:"publicDomainNames"`
	ResourceType         *ResourceTypeEnum              `json:"resourceType"`
	Scale                *int64                         `json:"scale"`
	State                *ContainerServiceStateEnum     `json:"state"`
	StateDetail          *ContainerServiceStateDetail   `json:"stateDetail"`
	Tags                 []Tag                          `json:"tags"`
	URL                  *string                        `json:"url"`
}
