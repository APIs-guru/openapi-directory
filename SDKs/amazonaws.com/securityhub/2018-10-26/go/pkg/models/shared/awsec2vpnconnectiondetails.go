package shared

// AwsEc2VpnConnectionDetails
// Details about an Amazon EC2 VPN connection.
type AwsEc2VpnConnectionDetails struct {
	Category                     *string                                  `json:"Category,omitempty"`
	CustomerGatewayConfiguration *string                                  `json:"CustomerGatewayConfiguration,omitempty"`
	CustomerGatewayID            *string                                  `json:"CustomerGatewayId,omitempty"`
	Options                      *AwsEc2VpnConnectionOptionsDetails       `json:"Options,omitempty"`
	Routes                       []AwsEc2VpnConnectionRoutesDetails       `json:"Routes,omitempty"`
	State                        *string                                  `json:"State,omitempty"`
	TransitGatewayID             *string                                  `json:"TransitGatewayId,omitempty"`
	Type                         *string                                  `json:"Type,omitempty"`
	VgwTelemetry                 []AwsEc2VpnConnectionVgwTelemetryDetails `json:"VgwTelemetry,omitempty"`
	VpnConnectionID              *string                                  `json:"VpnConnectionId,omitempty"`
	VpnGatewayID                 *string                                  `json:"VpnGatewayId,omitempty"`
}
