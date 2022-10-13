package shared

type GoogleCloudBaremetalsolutionV2LogicalInterface struct {
	InterfaceIndex           *int32                    `json:"interfaceIndex"`
	LogicalNetworkInterfaces []LogicalNetworkInterface `json:"logicalNetworkInterfaces"`
	Name                     *string                   `json:"name"`
}
