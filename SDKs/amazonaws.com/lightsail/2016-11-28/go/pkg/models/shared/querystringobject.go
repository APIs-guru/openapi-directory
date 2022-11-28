package shared

// QueryStringObject
// <p>Describes the query string parameters that an Amazon Lightsail content delivery network (CDN) distribution to bases caching on.</p> <p>For the query strings that you specify, your distribution caches separate versions of the specified content based on the query string values in viewer requests.</p>
type QueryStringObject struct {
	Option                *bool    `json:"option,omitempty"`
	QueryStringsAllowList []string `json:"queryStringsAllowList,omitempty"`
}
