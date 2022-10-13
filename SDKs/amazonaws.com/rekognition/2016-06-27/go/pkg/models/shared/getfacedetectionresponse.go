package shared

type GetFaceDetectionResponse struct {
	Faces         []FaceDetection     `json:"Faces"`
	JobStatus     *VideoJobStatusEnum `json:"JobStatus"`
	NextToken     *string             `json:"NextToken"`
	StatusMessage *string             `json:"StatusMessage"`
	VideoMetadata *VideoMetadata      `json:"VideoMetadata"`
}
