package shared

type CreateCodeRepositoryInput struct {
	CodeRepositoryName string    `json:"CodeRepositoryName"`
	GitConfig          GitConfig `json:"GitConfig"`
	Tags               []Tag     `json:"Tags,omitempty"`
}
