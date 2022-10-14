package shared

type EndpointUser struct {
	UserAttributes map[string][]string `json:"UserAttributes,omitempty"`
	UserID         *string             `json:"UserId,omitempty"`
}
