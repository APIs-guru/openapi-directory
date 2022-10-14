package shared

type LabelingJobDataSource struct {
	S3DataSource  *LabelingJobS3DataSource  `json:"S3DataSource,omitempty"`
	SnsDataSource *LabelingJobSnsDataSource `json:"SnsDataSource,omitempty"`
}
