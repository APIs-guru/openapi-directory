package shared

// TransformInput
// Describes the input source of a transform job and the way the transform job consumes it.
type TransformInput struct {
	CompressionType *CompressionTypeEnum `json:"CompressionType,omitempty"`
	ContentType     *string              `json:"ContentType,omitempty"`
	DataSource      TransformDataSource  `json:"DataSource"`
	SplitType       *SplitTypeEnum       `json:"SplitType,omitempty"`
}
