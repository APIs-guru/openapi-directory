package shared

// FunctionCodeLocation
// Details about a function's deployment package.
type FunctionCodeLocation struct {
	ImageURI         *string `json:"ImageUri,omitempty"`
	Location         *string `json:"Location,omitempty"`
	RepositoryType   *string `json:"RepositoryType,omitempty"`
	ResolvedImageURI *string `json:"ResolvedImageUri,omitempty"`
}
