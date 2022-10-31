package shared



type DescribeImageVersionRequest struct {
    ImageName string `json:"ImageName"`
    Version *int64 `json:"Version,omitempty"`
    
}

