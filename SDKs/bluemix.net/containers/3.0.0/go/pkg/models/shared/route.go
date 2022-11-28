package shared

// Route
// The public route that is mapped to the container group. You can use this route to access your container group from the Internet.
type Route struct {
	Domain *string `json:"domain,omitempty"`
	Host   *string `json:"host,omitempty"`
}
