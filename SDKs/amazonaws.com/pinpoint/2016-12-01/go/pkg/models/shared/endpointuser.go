package shared

type EndpointUser struct {
	UserAttributes map[string][]string `json:"UserAttributes"`
	UserID         *string             `json:"UserId"`
}
