package shared

type AwsRedshiftClusterResizeInfo struct {
	AllowCancelResize *bool   `json:"AllowCancelResize,omitempty"`
	ResizeType        *string `json:"ResizeType,omitempty"`
}
