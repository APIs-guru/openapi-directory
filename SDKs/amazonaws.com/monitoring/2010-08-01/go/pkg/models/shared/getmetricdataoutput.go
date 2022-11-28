package shared

type GetMetricDataOutput struct {
	Messages          []MessageData
	MetricDataResults []MetricDataResult
	NextToken         *string
}
