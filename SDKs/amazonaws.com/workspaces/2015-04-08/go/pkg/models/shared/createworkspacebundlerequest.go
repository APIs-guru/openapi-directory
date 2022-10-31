package shared



type CreateWorkspaceBundleRequest struct {
    BundleDescription string `json:"BundleDescription"`
    BundleName string `json:"BundleName"`
    ComputeType ComputeType `json:"ComputeType"`
    ImageID string `json:"ImageId"`
    RootStorage *RootStorage `json:"RootStorage,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    UserStorage UserStorage `json:"UserStorage"`
    
}

