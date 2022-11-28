package shared

// LabelingJobSnsDataSource
// An Amazon SNS data source used for streaming labeling jobs.
type LabelingJobSnsDataSource struct {
	SnsTopicArn string `json:"SnsTopicArn"`
}
