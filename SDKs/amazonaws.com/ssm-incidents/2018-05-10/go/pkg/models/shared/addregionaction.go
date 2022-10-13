package shared

type AddRegionAction struct {
	RegionName  string  `json:"regionName"`
	SseKmsKeyID *string `json:"sseKmsKeyId"`
}
