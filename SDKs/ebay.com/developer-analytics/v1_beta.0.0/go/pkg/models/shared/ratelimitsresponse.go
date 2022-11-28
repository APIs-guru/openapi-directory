package shared

// RateLimitsResponse
// This complex type defines a list of rate-limit data as it pertains to a method within the specified version of an API.
type RateLimitsResponse struct {
	RateLimits []RateLimit `json:"rateLimits,omitempty"`
}
