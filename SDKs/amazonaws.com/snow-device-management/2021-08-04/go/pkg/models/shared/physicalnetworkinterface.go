package shared

type PhysicalNetworkInterface struct {
	DefaultGateway             *string                    `json:"defaultGateway"`
	IPAddress                  *string                    `json:"ipAddress"`
	IPAddressAssignment        *IPAddressAssignmentEnum   `json:"ipAddressAssignment"`
	MacAddress                 *string                    `json:"macAddress"`
	Netmask                    *string                    `json:"netmask"`
	PhysicalConnectorType      *PhysicalConnectorTypeEnum `json:"physicalConnectorType"`
	PhysicalNetworkInterfaceID *string                    `json:"physicalNetworkInterfaceId"`
}
