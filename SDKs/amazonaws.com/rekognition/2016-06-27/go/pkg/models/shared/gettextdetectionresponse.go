package shared

type GetTextDetectionResponse struct {
	JobStatus        *VideoJobStatusEnum   `json:"JobStatus"`
	NextToken        *string               `json:"NextToken"`
	StatusMessage    *string               `json:"StatusMessage"`
	TextDetections   []TextDetectionResult `json:"TextDetections"`
	TextModelVersion *string               `json:"TextModelVersion"`
	VideoMetadata    *VideoMetadata        `json:"VideoMetadata"`
}
