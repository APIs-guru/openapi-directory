package shared

// AwsEc2VpnConnectionVgwTelemetryDetails
// Information about the VPN tunnel.
type AwsEc2VpnConnectionVgwTelemetryDetails struct {
	AcceptedRouteCount *int64  `json:"AcceptedRouteCount,omitempty"`
	CertificateArn     *string `json:"CertificateArn,omitempty"`
	LastStatusChange   *string `json:"LastStatusChange,omitempty"`
	OutsideIPAddress   *string `json:"OutsideIpAddress,omitempty"`
	Status             *string `json:"Status,omitempty"`
	StatusMessage      *string `json:"StatusMessage,omitempty"`
}
