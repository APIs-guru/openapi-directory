package shared

type JSONWebToken struct {
	CreatedOn *int64 `json:"createdOn"`
	Expires   *int64 `json:"expires"`
	Token     string `json:"token"`
}
