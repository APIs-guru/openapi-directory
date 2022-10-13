package shared

type GetContentModerationResponse struct {
	JobStatus              *VideoJobStatusEnum          `json:"JobStatus"`
	ModerationLabels       []ContentModerationDetection `json:"ModerationLabels"`
	ModerationModelVersion *string                      `json:"ModerationModelVersion"`
	NextToken              *string                      `json:"NextToken"`
	StatusMessage          *string                      `json:"StatusMessage"`
	VideoMetadata          *VideoMetadata               `json:"VideoMetadata"`
}
