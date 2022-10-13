package shared

type CacheSettings struct {
	AllowedHTTPMethods    *string            `json:"allowedHTTPMethods"`
	CachedHTTPMethods     *string            `json:"cachedHTTPMethods"`
	DefaultTTL            *int64             `json:"defaultTTL"`
	ForwardedCookies      *CookieObject      `json:"forwardedCookies"`
	ForwardedHeaders      *HeaderObject      `json:"forwardedHeaders"`
	ForwardedQueryStrings *QueryStringObject `json:"forwardedQueryStrings"`
	MaximumTTL            *int64             `json:"maximumTTL"`
	MinimumTTL            *int64             `json:"minimumTTL"`
}
