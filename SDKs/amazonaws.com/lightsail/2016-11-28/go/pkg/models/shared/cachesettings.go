package shared

type CacheSettings struct {
	AllowedHTTPMethods    *string            `json:"allowedHTTPMethods,omitempty"`
	CachedHTTPMethods     *string            `json:"cachedHTTPMethods,omitempty"`
	DefaultTTL            *int64             `json:"defaultTTL,omitempty"`
	ForwardedCookies      *CookieObject      `json:"forwardedCookies,omitempty"`
	ForwardedHeaders      *HeaderObject      `json:"forwardedHeaders,omitempty"`
	ForwardedQueryStrings *QueryStringObject `json:"forwardedQueryStrings,omitempty"`
	MaximumTTL            *int64             `json:"maximumTTL,omitempty"`
	MinimumTTL            *int64             `json:"minimumTTL,omitempty"`
}
