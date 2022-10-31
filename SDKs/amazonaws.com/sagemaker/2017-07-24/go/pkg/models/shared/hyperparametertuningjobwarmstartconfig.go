package shared



type HyperParameterTuningJobWarmStartConfig struct {
    ParentHyperParameterTuningJobs []ParentHyperParameterTuningJob `json:"ParentHyperParameterTuningJobs"`
    WarmStartType HyperParameterTuningJobWarmStartTypeEnum `json:"WarmStartType"`
    
}

