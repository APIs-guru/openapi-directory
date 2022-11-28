package shared

import (
	"time"
)

// Instance
// Describes an instance (a virtual private server).
type Instance struct {
	AddOns           []AddOn             `json:"addOns,omitempty"`
	Arn              *string             `json:"arn,omitempty"`
	BlueprintID      *string             `json:"blueprintId,omitempty"`
	BlueprintName    *string             `json:"blueprintName,omitempty"`
	BundleID         *string             `json:"bundleId,omitempty"`
	CreatedAt        *time.Time          `json:"createdAt,omitempty"`
	Hardware         *InstanceHardware   `json:"hardware,omitempty"`
	IPAddressType    *IPAddressTypeEnum  `json:"ipAddressType,omitempty"`
	Ipv6Addresses    []string            `json:"ipv6Addresses,omitempty"`
	IsStaticIP       *bool               `json:"isStaticIp,omitempty"`
	Location         *ResourceLocation   `json:"location,omitempty"`
	Name             *string             `json:"name,omitempty"`
	Networking       *InstanceNetworking `json:"networking,omitempty"`
	PrivateIPAddress *string             `json:"privateIpAddress,omitempty"`
	PublicIPAddress  *string             `json:"publicIpAddress,omitempty"`
	ResourceType     *ResourceTypeEnum   `json:"resourceType,omitempty"`
	SSHKeyName       *string             `json:"sshKeyName,omitempty"`
	State            *InstanceState      `json:"state,omitempty"`
	SupportCode      *string             `json:"supportCode,omitempty"`
	Tags             []Tag               `json:"tags,omitempty"`
	Username         *string             `json:"username,omitempty"`
}
