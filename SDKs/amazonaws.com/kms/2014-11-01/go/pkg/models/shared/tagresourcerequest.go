package shared

type TagResourceRequest struct {
	KeyID string `json:"KeyId"`
	Tags  []Tag  `json:"Tags"`
}
