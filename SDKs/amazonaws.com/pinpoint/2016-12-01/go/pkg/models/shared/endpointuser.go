package shared

// EndpointUser
// Specifies data for one or more attributes that describe the user who's associated with an endpoint.
type EndpointUser struct {
	UserAttributes map[string][]string `json:"UserAttributes,omitempty"`
	UserID         *string             `json:"UserId,omitempty"`
}
