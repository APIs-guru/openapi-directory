package shared

// RateLimit
// This complex types defines the resource (such as an API method) for which the rate-limit data is returned. A method is included in an API, and an API is part of an API context for the API version specified.
type RateLimit struct {
	APIContext *string    `json:"apiContext,omitempty"`
	APIName    *string    `json:"apiName,omitempty"`
	APIVersion *string    `json:"apiVersion,omitempty"`
	Resources  []Resource `json:"resources,omitempty"`
}
