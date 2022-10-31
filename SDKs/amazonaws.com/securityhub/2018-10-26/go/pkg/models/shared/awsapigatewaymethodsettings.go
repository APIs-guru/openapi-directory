package shared



type AwsAPIGatewayMethodSettings struct {
    CacheDataEncrypted *bool `json:"CacheDataEncrypted,omitempty"`
    CacheTTLInSeconds *int64 `json:"CacheTtlInSeconds,omitempty"`
    CachingEnabled *bool `json:"CachingEnabled,omitempty"`
    DataTraceEnabled *bool `json:"DataTraceEnabled,omitempty"`
    HTTPMethod *string `json:"HttpMethod,omitempty"`
    LoggingLevel *string `json:"LoggingLevel,omitempty"`
    MetricsEnabled *bool `json:"MetricsEnabled,omitempty"`
    RequireAuthorizationForCacheControl *bool `json:"RequireAuthorizationForCacheControl,omitempty"`
    ResourcePath *string `json:"ResourcePath,omitempty"`
    ThrottlingBurstLimit *int64 `json:"ThrottlingBurstLimit,omitempty"`
    ThrottlingRateLimit *float64 `json:"ThrottlingRateLimit,omitempty"`
    UnauthorizedCacheControlHeaderStrategy *string `json:"UnauthorizedCacheControlHeaderStrategy,omitempty"`
    
}

