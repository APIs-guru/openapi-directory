package shared

type VideoSessionDevice struct {
	Model  *string `json:"model,omitempty"`
	Type   *string `json:"type,omitempty"`
	Vendor *string `json:"vendor,omitempty"`
}
