package shared

type LabelingJobDataSource struct {
	S3DataSource  *LabelingJobS3DataSource  `json:"S3DataSource"`
	SnsDataSource *LabelingJobSnsDataSource `json:"SnsDataSource"`
}
