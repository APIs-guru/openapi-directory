package shared

// GoogleCloudBaremetalsolutionV2LogicalInterface
// Each logical interface represents a logical abstraction of the underlying physical interface (for eg. bond, nic) of the instance. Each logical interface can effectively map to multiple network-IP pairs and still be mapped to one underlying physical interface.
type GoogleCloudBaremetalsolutionV2LogicalInterface struct {
	InterfaceIndex           *int32                    `json:"interfaceIndex,omitempty"`
	LogicalNetworkInterfaces []LogicalNetworkInterface `json:"logicalNetworkInterfaces,omitempty"`
	Name                     *string                   `json:"name,omitempty"`
}
