package shared



type GoogleCloudBaremetalsolutionV2LogicalInterface struct {
    InterfaceIndex *int32 `json:"interfaceIndex,omitempty"`
    LogicalNetworkInterfaces []LogicalNetworkInterface `json:"logicalNetworkInterfaces,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

