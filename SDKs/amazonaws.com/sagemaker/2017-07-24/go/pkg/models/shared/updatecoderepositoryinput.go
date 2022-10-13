package shared

type UpdateCodeRepositoryInput struct {
	CodeRepositoryName string              `json:"CodeRepositoryName"`
	GitConfig          *GitConfigForUpdate `json:"GitConfig"`
}
