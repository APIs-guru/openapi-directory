package shared

type GetAccessTokenRequest struct {
	Token           string   `json:"Token"`
	TokenProperties []string `json:"TokenProperties"`
}
