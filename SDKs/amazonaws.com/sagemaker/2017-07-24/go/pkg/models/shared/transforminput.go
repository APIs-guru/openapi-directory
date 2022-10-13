package shared

type TransformInput struct {
	CompressionType *CompressionTypeEnum `json:"CompressionType"`
	ContentType     *string              `json:"ContentType"`
	DataSource      TransformDataSource  `json:"DataSource"`
	SplitType       *SplitTypeEnum       `json:"SplitType"`
}
