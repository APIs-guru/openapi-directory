package shared

// DeployModelRequest
// Request message for AutoMl.DeployModel.
type DeployModelRequest struct {
	ImageClassificationModelDeploymentMetadata  *ImageClassificationModelDeploymentMetadata  `json:"imageClassificationModelDeploymentMetadata,omitempty"`
	ImageObjectDetectionModelDeploymentMetadata *ImageObjectDetectionModelDeploymentMetadata `json:"imageObjectDetectionModelDeploymentMetadata,omitempty"`
}
