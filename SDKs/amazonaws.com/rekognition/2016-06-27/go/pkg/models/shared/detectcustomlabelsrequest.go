package shared

type DetectCustomLabelsRequest struct {
	Image             Image    `json:"Image"`
	MaxResults        *int64   `json:"MaxResults"`
	MinConfidence     *float32 `json:"MinConfidence"`
	ProjectVersionArn string   `json:"ProjectVersionArn"`
}
