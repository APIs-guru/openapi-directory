package shared

type AwsAPIGatewayV2RouteSettings struct {
	DataTraceEnabled       *bool    `json:"DataTraceEnabled"`
	DetailedMetricsEnabled *bool    `json:"DetailedMetricsEnabled"`
	LoggingLevel           *string  `json:"LoggingLevel"`
	ThrottlingBurstLimit   *int64   `json:"ThrottlingBurstLimit"`
	ThrottlingRateLimit    *float64 `json:"ThrottlingRateLimit"`
}
