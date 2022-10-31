package shared



type DeployModelRequest struct {
    ImageClassificationModelDeploymentMetadata *ImageClassificationModelDeploymentMetadata `json:"imageClassificationModelDeploymentMetadata,omitempty"`
    ImageObjectDetectionModelDeploymentMetadata *ImageObjectDetectionModelDeploymentMetadata `json:"imageObjectDetectionModelDeploymentMetadata,omitempty"`
    
}

