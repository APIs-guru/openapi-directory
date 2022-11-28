package shared

type DescribeAnomalyDetectorsOutput struct {
	AnomalyDetectors []AnomalyDetector
	NextToken        *string
}
