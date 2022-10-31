package shared

type SimulationJobRequest struct {
	Compute                 *Compute                      `json:"compute,omitempty"`
	DataSources             []DataSourceConfig            `json:"dataSources,omitempty"`
	FailureBehavior         *FailureBehaviorEnum          `json:"failureBehavior,omitempty"`
	IamRole                 *string                       `json:"iamRole,omitempty"`
	LoggingConfig           *LoggingConfig                `json:"loggingConfig,omitempty"`
	MaxJobDurationInSeconds int64                         `json:"maxJobDurationInSeconds"`
	OutputLocation          *OutputLocation               `json:"outputLocation,omitempty"`
	RobotApplications       []RobotApplicationConfig      `json:"robotApplications,omitempty"`
	SimulationApplications  []SimulationApplicationConfig `json:"simulationApplications,omitempty"`
	Tags                    map[string]string             `json:"tags,omitempty"`
	UseDefaultApplications  *bool                         `json:"useDefaultApplications,omitempty"`
	VpcConfig               *VpcConfig                    `json:"vpcConfig,omitempty"`
}
