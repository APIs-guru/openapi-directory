package shared

type DescribeWorkspaceImagesRequest struct {
	ImageIds   []string       `json:"ImageIds"`
	ImageType  *ImageTypeEnum `json:"ImageType"`
	MaxResults *int64         `json:"MaxResults"`
	NextToken  *string        `json:"NextToken"`
}
