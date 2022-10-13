package shared

type JobConfiguration struct {
	Copy         *JobConfigurationTableCopy `json:"copy"`
	DryRun       *bool                      `json:"dryRun"`
	Extract      *JobConfigurationExtract   `json:"extract"`
	JobTimeoutMs *string                    `json:"jobTimeoutMs"`
	JobType      *string                    `json:"jobType"`
	Labels       map[string]string          `json:"labels"`
	Load         *JobConfigurationLoad      `json:"load"`
	Query        *JobConfigurationQuery     `json:"query"`
}
