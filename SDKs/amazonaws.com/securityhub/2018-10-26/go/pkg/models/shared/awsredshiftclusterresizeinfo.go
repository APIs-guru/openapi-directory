package shared

// AwsRedshiftClusterResizeInfo
// Information about the resize operation for the cluster.
type AwsRedshiftClusterResizeInfo struct {
	AllowCancelResize *bool   `json:"AllowCancelResize,omitempty"`
	ResizeType        *string `json:"ResizeType,omitempty"`
}
