package shared

type ComparisonOperatorEnum string

const (
	ComparisonOperatorEnumGreaterThanOrEqualToThreshold            ComparisonOperatorEnum = "GreaterThanOrEqualToThreshold"
	ComparisonOperatorEnumGreaterThanThreshold                     ComparisonOperatorEnum = "GreaterThanThreshold"
	ComparisonOperatorEnumLessThanThreshold                        ComparisonOperatorEnum = "LessThanThreshold"
	ComparisonOperatorEnumLessThanOrEqualToThreshold               ComparisonOperatorEnum = "LessThanOrEqualToThreshold"
	ComparisonOperatorEnumLessThanLowerOrGreaterThanUpperThreshold ComparisonOperatorEnum = "LessThanLowerOrGreaterThanUpperThreshold"
	ComparisonOperatorEnumLessThanLowerThreshold                   ComparisonOperatorEnum = "LessThanLowerThreshold"
	ComparisonOperatorEnumGreaterThanUpperThreshold                ComparisonOperatorEnum = "GreaterThanUpperThreshold"
)
