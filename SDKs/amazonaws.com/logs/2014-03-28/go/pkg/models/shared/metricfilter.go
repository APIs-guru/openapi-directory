package shared

type MetricFilter struct {
	CreationTime          *int64                 `json:"creationTime"`
	FilterName            *string                `json:"filterName"`
	FilterPattern         *string                `json:"filterPattern"`
	LogGroupName          *string                `json:"logGroupName"`
	MetricTransformations []MetricTransformation `json:"metricTransformations"`
}
