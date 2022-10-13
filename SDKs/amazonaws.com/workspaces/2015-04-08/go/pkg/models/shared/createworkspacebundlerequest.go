package shared

type CreateWorkspaceBundleRequest struct {
	BundleDescription string       `json:"BundleDescription"`
	BundleName        string       `json:"BundleName"`
	ComputeType       ComputeType  `json:"ComputeType"`
	ImageID           string       `json:"ImageId"`
	RootStorage       *RootStorage `json:"RootStorage"`
	Tags              []Tag        `json:"Tags"`
	UserStorage       UserStorage  `json:"UserStorage"`
}
