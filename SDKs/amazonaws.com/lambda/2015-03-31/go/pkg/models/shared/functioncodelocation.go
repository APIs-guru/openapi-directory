package shared

type FunctionCodeLocation struct {
	ImageURI         *string `json:"ImageUri"`
	Location         *string `json:"Location"`
	RepositoryType   *string `json:"RepositoryType"`
	ResolvedImageURI *string `json:"ResolvedImageUri"`
}
