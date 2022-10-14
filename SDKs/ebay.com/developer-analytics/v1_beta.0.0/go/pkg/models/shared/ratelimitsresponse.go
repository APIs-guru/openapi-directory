package shared

type RateLimitsResponse struct {
	RateLimits []RateLimit `json:"rateLimits,omitempty"`
}
