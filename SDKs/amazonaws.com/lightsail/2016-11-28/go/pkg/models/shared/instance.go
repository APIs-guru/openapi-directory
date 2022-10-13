package shared

import (
	"time"
)

type Instance struct {
	AddOns           []AddOn             `json:"addOns"`
	Arn              *string             `json:"arn"`
	BlueprintID      *string             `json:"blueprintId"`
	BlueprintName    *string             `json:"blueprintName"`
	BundleID         *string             `json:"bundleId"`
	CreatedAt        *time.Time          `json:"createdAt"`
	Hardware         *InstanceHardware   `json:"hardware"`
	IPAddressType    *IPAddressTypeEnum  `json:"ipAddressType"`
	Ipv6Addresses    []string            `json:"ipv6Addresses"`
	IsStaticIP       *bool               `json:"isStaticIp"`
	Location         *ResourceLocation   `json:"location"`
	Name             *string             `json:"name"`
	Networking       *InstanceNetworking `json:"networking"`
	PrivateIPAddress *string             `json:"privateIpAddress"`
	PublicIPAddress  *string             `json:"publicIpAddress"`
	ResourceType     *ResourceTypeEnum   `json:"resourceType"`
	SSHKeyName       *string             `json:"sshKeyName"`
	State            *InstanceState      `json:"state"`
	SupportCode      *string             `json:"supportCode"`
	Tags             []Tag               `json:"tags"`
	Username         *string             `json:"username"`
}
