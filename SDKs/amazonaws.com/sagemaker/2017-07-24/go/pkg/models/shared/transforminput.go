package shared

type TransformInput struct {
	CompressionType *CompressionTypeEnum `json:"CompressionType,omitempty"`
	ContentType     *string              `json:"ContentType,omitempty"`
	DataSource      TransformDataSource  `json:"DataSource"`
	SplitType       *SplitTypeEnum       `json:"SplitType,omitempty"`
}
