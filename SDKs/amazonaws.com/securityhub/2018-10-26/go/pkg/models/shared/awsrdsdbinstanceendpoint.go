package shared

type AwsRdsDbInstanceEndpoint struct {
	Address      *string `json:"Address"`
	HostedZoneID *string `json:"HostedZoneId"`
	Port         *int64  `json:"Port"`
}
