package shared

type LabelingJobInputConfig struct {
	DataAttributes *LabelingJobDataAttributes `json:"DataAttributes,omitempty"`
	DataSource     LabelingJobDataSource      `json:"DataSource"`
}
