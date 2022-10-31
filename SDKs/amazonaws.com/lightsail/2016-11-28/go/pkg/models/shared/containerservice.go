package shared

import (
"time")

type ContainerService struct {
    Arn *string `json:"arn,omitempty"`
    ContainerServiceName *string `json:"containerServiceName,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    CurrentDeployment *ContainerServiceDeployment `json:"currentDeployment,omitempty"`
    IsDisabled *bool `json:"isDisabled,omitempty"`
    Location *ResourceLocation `json:"location,omitempty"`
    NextDeployment *ContainerServiceDeployment `json:"nextDeployment,omitempty"`
    Power *ContainerServicePowerNameEnum `json:"power,omitempty"`
    PowerID *string `json:"powerId,omitempty"`
    PrincipalArn *string `json:"principalArn,omitempty"`
    PrivateDomainName *string `json:"privateDomainName,omitempty"`
    PublicDomainNames map[string][]string `json:"publicDomainNames,omitempty"`
    ResourceType *ResourceTypeEnum `json:"resourceType,omitempty"`
    Scale *int64 `json:"scale,omitempty"`
    State *ContainerServiceStateEnum `json:"state,omitempty"`
    StateDetail *ContainerServiceStateDetail `json:"stateDetail,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

