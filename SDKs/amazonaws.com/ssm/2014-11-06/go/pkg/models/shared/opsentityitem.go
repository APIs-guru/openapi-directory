package shared

type OpsEntityItem struct {
	CaptureTime *string             `json:"CaptureTime"`
	Content     []map[string]string `json:"Content"`
}
