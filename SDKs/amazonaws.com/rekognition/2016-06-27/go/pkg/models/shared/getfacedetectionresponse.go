package shared

type GetFaceDetectionResponse struct {
	Faces         []FaceDetection     `json:"Faces,omitempty"`
	JobStatus     *VideoJobStatusEnum `json:"JobStatus,omitempty"`
	NextToken     *string             `json:"NextToken,omitempty"`
	StatusMessage *string             `json:"StatusMessage,omitempty"`
	VideoMetadata *VideoMetadata      `json:"VideoMetadata,omitempty"`
}
