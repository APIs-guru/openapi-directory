package shared

// SignupURL
// An enterprise signup URL.
type SignupURL struct {
	Name *string `json:"name,omitempty"`
	URL  *string `json:"url,omitempty"`
}
