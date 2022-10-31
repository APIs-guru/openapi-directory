package shared

type PutMetricPolicyInput struct {
	ContainerName string       `json:"ContainerName"`
	MetricPolicy  MetricPolicy `json:"MetricPolicy"`
}
