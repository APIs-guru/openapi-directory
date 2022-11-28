package shared

// LabelingJobInputConfig
// Input configuration information for a labeling job.
type LabelingJobInputConfig struct {
	DataAttributes *LabelingJobDataAttributes `json:"DataAttributes,omitempty"`
	DataSource     LabelingJobDataSource      `json:"DataSource"`
}
