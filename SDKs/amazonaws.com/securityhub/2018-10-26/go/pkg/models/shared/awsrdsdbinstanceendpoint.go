package shared

// AwsRdsDbInstanceEndpoint
// Specifies the connection endpoint.
type AwsRdsDbInstanceEndpoint struct {
	Address      *string `json:"Address,omitempty"`
	HostedZoneID *string `json:"HostedZoneId,omitempty"`
	Port         *int64  `json:"Port,omitempty"`
}
