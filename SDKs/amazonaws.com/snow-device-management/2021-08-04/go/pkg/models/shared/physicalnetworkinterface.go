package shared

type PhysicalNetworkInterface struct {
	DefaultGateway             *string                    `json:"defaultGateway,omitempty"`
	IPAddress                  *string                    `json:"ipAddress,omitempty"`
	IPAddressAssignment        *IPAddressAssignmentEnum   `json:"ipAddressAssignment,omitempty"`
	MacAddress                 *string                    `json:"macAddress,omitempty"`
	Netmask                    *string                    `json:"netmask,omitempty"`
	PhysicalConnectorType      *PhysicalConnectorTypeEnum `json:"physicalConnectorType,omitempty"`
	PhysicalNetworkInterfaceID *string                    `json:"physicalNetworkInterfaceId,omitempty"`
}
