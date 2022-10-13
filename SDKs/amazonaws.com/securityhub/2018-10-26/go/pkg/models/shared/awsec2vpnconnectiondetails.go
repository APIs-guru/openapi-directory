package shared

type AwsEc2VpnConnectionDetails struct {
	Category                     *string                                  `json:"Category"`
	CustomerGatewayConfiguration *string                                  `json:"CustomerGatewayConfiguration"`
	CustomerGatewayID            *string                                  `json:"CustomerGatewayId"`
	Options                      *AwsEc2VpnConnectionOptionsDetails       `json:"Options"`
	Routes                       []AwsEc2VpnConnectionRoutesDetails       `json:"Routes"`
	State                        *string                                  `json:"State"`
	TransitGatewayID             *string                                  `json:"TransitGatewayId"`
	Type                         *string                                  `json:"Type"`
	VgwTelemetry                 []AwsEc2VpnConnectionVgwTelemetryDetails `json:"VgwTelemetry"`
	VpnConnectionID              *string                                  `json:"VpnConnectionId"`
	VpnGatewayID                 *string                                  `json:"VpnGatewayId"`
}
