package shared

// DescribeVolumesResult
// Contains the response to a <code>DescribeVolumes</code> request.
type DescribeVolumesResult struct {
	Volumes []Volume `json:"Volumes,omitempty"`
}
