package shared

// CustomImage
// A custom SageMaker image. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html">Bring your own SageMaker image</a>.
type CustomImage struct {
	AppImageConfigName string `json:"AppImageConfigName"`
	ImageName          string `json:"ImageName"`
	ImageVersionNumber *int64 `json:"ImageVersionNumber,omitempty"`
}
