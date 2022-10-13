package shared

type Service struct {
	Categories []Category `json:"categories"`
	Code       *string    `json:"code"`
	Name       *string    `json:"name"`
}
