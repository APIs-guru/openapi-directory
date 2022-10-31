package shared



type DescribeWorkspaceImagesRequest struct {
    ImageIds []string `json:"ImageIds,omitempty"`
    ImageType *ImageTypeEnum `json:"ImageType,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

