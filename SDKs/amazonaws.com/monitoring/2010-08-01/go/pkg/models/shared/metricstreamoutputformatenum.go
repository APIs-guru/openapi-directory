package shared

type MetricStreamOutputFormatEnum string

const (
	MetricStreamOutputFormatEnumJSON            MetricStreamOutputFormatEnum = "json"
	MetricStreamOutputFormatEnumOpentelemetry07 MetricStreamOutputFormatEnum = "opentelemetry0.7"
)
