package shared

type AwsRedshiftClusterResizeInfo struct {
	AllowCancelResize *bool   `json:"AllowCancelResize"`
	ResizeType        *string `json:"ResizeType"`
}
