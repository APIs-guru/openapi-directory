package shared

type AwsEc2VpnConnectionVgwTelemetryDetails struct {
	AcceptedRouteCount *int64  `json:"AcceptedRouteCount"`
	CertificateArn     *string `json:"CertificateArn"`
	LastStatusChange   *string `json:"LastStatusChange"`
	OutsideIPAddress   *string `json:"OutsideIpAddress"`
	Status             *string `json:"Status"`
	StatusMessage      *string `json:"StatusMessage"`
}
