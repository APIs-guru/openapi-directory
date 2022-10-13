package shared

type SubUserJSONWebToken struct {
	CreatedOn *int64   `json:"createdOn"`
	Domain    string   `json:"domain"`
	EndPoints []string `json:"endPoints"`
	Expires   *int64   `json:"expires"`
	Token     string   `json:"token"`
	UUID      string   `json:"uuid"`
}
