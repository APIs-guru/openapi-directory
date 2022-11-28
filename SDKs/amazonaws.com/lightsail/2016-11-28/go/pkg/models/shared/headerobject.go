package shared

// HeaderObject
// <p>Describes the request headers that a Lightsail distribution bases caching on.</p> <p>For the headers that you specify, your distribution caches separate versions of the specified content based on the header values in viewer requests. For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a value of either <code>acme</code> or <code>apex</code>, and you configure your distribution to cache your content based on values in the <code>product</code> header. Your distribution forwards the <code>product</code> header to the origin and caches the response from the origin once for each header value. </p>
type HeaderObject struct {
	HeadersAllowList []HeaderEnumEnum   `json:"headersAllowList,omitempty"`
	Option           *ForwardValuesEnum `json:"option,omitempty"`
}
