package shared

type LogGroup struct {
	Arn               *string `json:"arn"`
	CreationTime      *int64  `json:"creationTime"`
	KmsKeyID          *string `json:"kmsKeyId"`
	LogGroupName      *string `json:"logGroupName"`
	MetricFilterCount *int64  `json:"metricFilterCount"`
	RetentionInDays   *int64  `json:"retentionInDays"`
	StoredBytes       *int64  `json:"storedBytes"`
}
