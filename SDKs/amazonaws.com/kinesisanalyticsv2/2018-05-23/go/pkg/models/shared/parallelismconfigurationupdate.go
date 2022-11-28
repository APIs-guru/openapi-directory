package shared

// ParallelismConfigurationUpdate
// Describes updates to parameters for how an application executes multiple tasks simultaneously.
type ParallelismConfigurationUpdate struct {
	AutoScalingEnabledUpdate *bool                  `json:"AutoScalingEnabledUpdate,omitempty"`
	ConfigurationTypeUpdate  *ConfigurationTypeEnum `json:"ConfigurationTypeUpdate,omitempty"`
	ParallelismPerKpuUpdate  *int64                 `json:"ParallelismPerKPUUpdate,omitempty"`
	ParallelismUpdate        *int64                 `json:"ParallelismUpdate,omitempty"`
}
