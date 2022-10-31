package shared

type DescribeVolumesResult struct {
	Volumes []Volume `json:"Volumes,omitempty"`
}
