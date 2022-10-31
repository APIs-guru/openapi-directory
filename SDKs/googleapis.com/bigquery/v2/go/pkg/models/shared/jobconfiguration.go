package shared



type JobConfiguration struct {
    Copy *JobConfigurationTableCopy `json:"copy,omitempty"`
    DryRun *bool `json:"dryRun,omitempty"`
    Extract *JobConfigurationExtract `json:"extract,omitempty"`
    JobTimeoutMs *string `json:"jobTimeoutMs,omitempty"`
    JobType *string `json:"jobType,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Load *JobConfigurationLoad `json:"load,omitempty"`
    Query *JobConfigurationQuery `json:"query,omitempty"`
    
}

