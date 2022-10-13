package shared

type LabelingJobInputConfig struct {
	DataAttributes *LabelingJobDataAttributes `json:"DataAttributes"`
	DataSource     LabelingJobDataSource      `json:"DataSource"`
}
