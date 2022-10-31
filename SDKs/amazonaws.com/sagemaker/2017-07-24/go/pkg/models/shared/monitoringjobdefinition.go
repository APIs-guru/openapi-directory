package shared

type MonitoringJobDefinition struct {
	BaselineConfig             *MonitoringBaselineConfig    `json:"BaselineConfig,omitempty"`
	Environment                map[string]string            `json:"Environment,omitempty"`
	MonitoringAppSpecification MonitoringAppSpecification   `json:"MonitoringAppSpecification"`
	MonitoringInputs           []MonitoringInput            `json:"MonitoringInputs"`
	MonitoringOutputConfig     MonitoringOutputConfig       `json:"MonitoringOutputConfig"`
	MonitoringResources        MonitoringResources          `json:"MonitoringResources"`
	NetworkConfig              *NetworkConfig               `json:"NetworkConfig,omitempty"`
	RoleArn                    string                       `json:"RoleArn"`
	StoppingCondition          *MonitoringStoppingCondition `json:"StoppingCondition,omitempty"`
}
