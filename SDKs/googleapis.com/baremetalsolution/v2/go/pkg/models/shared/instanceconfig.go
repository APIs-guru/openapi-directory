package shared

type InstanceConfigNetworkConfigEnum string

const (
	InstanceConfigNetworkConfigEnumNetworkconfigUnspecified InstanceConfigNetworkConfigEnum = "NETWORKCONFIG_UNSPECIFIED"
	InstanceConfigNetworkConfigEnumSingleVlan               InstanceConfigNetworkConfigEnum = "SINGLE_VLAN"
	InstanceConfigNetworkConfigEnumMultiVlan                InstanceConfigNetworkConfigEnum = "MULTI_VLAN"
)

type InstanceConfig struct {
	AccountNetworksEnabled *bool                                            `json:"accountNetworksEnabled,omitempty"`
	ClientNetwork          *NetworkAddress                                  `json:"clientNetwork,omitempty"`
	Hyperthreading         *bool                                            `json:"hyperthreading,omitempty"`
	ID                     *string                                          `json:"id,omitempty"`
	InstanceType           *string                                          `json:"instanceType,omitempty"`
	LogicalInterfaces      []GoogleCloudBaremetalsolutionV2LogicalInterface `json:"logicalInterfaces,omitempty"`
	Name                   *string                                          `json:"name,omitempty"`
	NetworkConfig          *InstanceConfigNetworkConfigEnum                 `json:"networkConfig,omitempty"`
	NetworkTemplate        *string                                          `json:"networkTemplate,omitempty"`
	OsImage                *string                                          `json:"osImage,omitempty"`
	PrivateNetwork         *NetworkAddress                                  `json:"privateNetwork,omitempty"`
	UserNote               *string                                          `json:"userNote,omitempty"`
}
