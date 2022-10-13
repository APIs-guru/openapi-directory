package shared

type InstanceConfigNetworkConfigEnum string

const (
	InstanceConfigNetworkConfigEnumNetworkconfigUnspecified InstanceConfigNetworkConfigEnum = "NETWORKCONFIG_UNSPECIFIED"
	InstanceConfigNetworkConfigEnumSingleVlan               InstanceConfigNetworkConfigEnum = "SINGLE_VLAN"
	InstanceConfigNetworkConfigEnumMultiVlan                InstanceConfigNetworkConfigEnum = "MULTI_VLAN"
)

type InstanceConfig struct {
	AccountNetworksEnabled *bool                                            `json:"accountNetworksEnabled"`
	ClientNetwork          *NetworkAddress                                  `json:"clientNetwork"`
	Hyperthreading         *bool                                            `json:"hyperthreading"`
	ID                     *string                                          `json:"id"`
	InstanceType           *string                                          `json:"instanceType"`
	LogicalInterfaces      []GoogleCloudBaremetalsolutionV2LogicalInterface `json:"logicalInterfaces"`
	Name                   *string                                          `json:"name"`
	NetworkConfig          *InstanceConfigNetworkConfigEnum                 `json:"networkConfig"`
	NetworkTemplate        *string                                          `json:"networkTemplate"`
	OsImage                *string                                          `json:"osImage"`
	PrivateNetwork         *NetworkAddress                                  `json:"privateNetwork"`
	UserNote               *string                                          `json:"userNote"`
}
