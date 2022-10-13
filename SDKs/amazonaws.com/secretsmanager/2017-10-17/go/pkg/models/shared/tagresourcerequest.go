package shared

type TagResourceRequest struct {
	SecretID string `json:"SecretId"`
	Tags     []Tag  `json:"Tags"`
}
