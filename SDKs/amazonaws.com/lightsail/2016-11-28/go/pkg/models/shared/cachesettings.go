package shared

// CacheSettings
// <p>Describes the cache settings of an Amazon Lightsail content delivery network (CDN) distribution.</p> <p>These settings apply only to your distribution's <code>cacheBehaviors</code> (including the <code>defaultCacheBehavior</code>) that have a <code>behavior</code> of <code>cache</code>.</p>
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
