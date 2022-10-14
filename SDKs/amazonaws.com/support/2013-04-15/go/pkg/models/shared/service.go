package shared

type Service struct {
	Categories []Category `json:"categories,omitempty"`
	Code       *string    `json:"code,omitempty"`
	Name       *string    `json:"name,omitempty"`
}
