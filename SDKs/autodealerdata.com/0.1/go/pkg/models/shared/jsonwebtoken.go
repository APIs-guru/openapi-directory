package shared

type JSONWebToken struct {
	CreatedOn *int64 `json:"createdOn,omitempty"`
	Expires   *int64 `json:"expires,omitempty"`
	Token     string `json:"token"`
}
