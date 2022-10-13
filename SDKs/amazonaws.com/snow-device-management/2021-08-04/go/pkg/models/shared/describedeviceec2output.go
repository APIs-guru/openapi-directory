package shared

type DescribeDeviceEc2Output struct {
	Instances []InstanceSummary `json:"instances"`
}
