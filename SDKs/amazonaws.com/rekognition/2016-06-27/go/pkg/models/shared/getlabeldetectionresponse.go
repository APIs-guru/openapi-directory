package shared

type GetLabelDetectionResponse struct {
	JobStatus         *VideoJobStatusEnum `json:"JobStatus"`
	LabelModelVersion *string             `json:"LabelModelVersion"`
	Labels            []LabelDetection    `json:"Labels"`
	NextToken         *string             `json:"NextToken"`
	StatusMessage     *string             `json:"StatusMessage"`
	VideoMetadata     *VideoMetadata      `json:"VideoMetadata"`
}
