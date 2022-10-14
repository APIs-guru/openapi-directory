package shared

type GetTextDetectionResponse struct {
	JobStatus        *VideoJobStatusEnum   `json:"JobStatus,omitempty"`
	NextToken        *string               `json:"NextToken,omitempty"`
	StatusMessage    *string               `json:"StatusMessage,omitempty"`
	TextDetections   []TextDetectionResult `json:"TextDetections,omitempty"`
	TextModelVersion *string               `json:"TextModelVersion,omitempty"`
	VideoMetadata    *VideoMetadata        `json:"VideoMetadata,omitempty"`
}
