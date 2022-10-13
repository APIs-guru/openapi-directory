package shared

type AwsAPIGatewayMethodSettings struct {
	CacheDataEncrypted                     *bool    `json:"CacheDataEncrypted"`
	CacheTTLInSeconds                      *int64   `json:"CacheTtlInSeconds"`
	CachingEnabled                         *bool    `json:"CachingEnabled"`
	DataTraceEnabled                       *bool    `json:"DataTraceEnabled"`
	HTTPMethod                             *string  `json:"HttpMethod"`
	LoggingLevel                           *string  `json:"LoggingLevel"`
	MetricsEnabled                         *bool    `json:"MetricsEnabled"`
	RequireAuthorizationForCacheControl    *bool    `json:"RequireAuthorizationForCacheControl"`
	ResourcePath                           *string  `json:"ResourcePath"`
	ThrottlingBurstLimit                   *int64   `json:"ThrottlingBurstLimit"`
	ThrottlingRateLimit                    *float64 `json:"ThrottlingRateLimit"`
	UnauthorizedCacheControlHeaderStrategy *string  `json:"UnauthorizedCacheControlHeaderStrategy"`
}
