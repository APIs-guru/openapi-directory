package shared

type SimulationJobRequest struct {
	Compute                 *Compute                      `json:"compute"`
	DataSources             []DataSourceConfig            `json:"dataSources"`
	FailureBehavior         *FailureBehaviorEnum          `json:"failureBehavior"`
	IamRole                 *string                       `json:"iamRole"`
	LoggingConfig           *LoggingConfig                `json:"loggingConfig"`
	MaxJobDurationInSeconds int64                         `json:"maxJobDurationInSeconds"`
	OutputLocation          *OutputLocation               `json:"outputLocation"`
	RobotApplications       []RobotApplicationConfig      `json:"robotApplications"`
	SimulationApplications  []SimulationApplicationConfig `json:"simulationApplications"`
	Tags                    map[string]string             `json:"tags"`
	UseDefaultApplications  *bool                         `json:"useDefaultApplications"`
	VpcConfig               *VpcConfig                    `json:"vpcConfig"`
}
