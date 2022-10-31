package shared



type AwsAPIGatewayV2RouteSettings struct {
    DataTraceEnabled *bool `json:"DataTraceEnabled,omitempty"`
    DetailedMetricsEnabled *bool `json:"DetailedMetricsEnabled,omitempty"`
    LoggingLevel *string `json:"LoggingLevel,omitempty"`
    ThrottlingBurstLimit *int64 `json:"ThrottlingBurstLimit,omitempty"`
    ThrottlingRateLimit *float64 `json:"ThrottlingRateLimit,omitempty"`
    
}

