package shared

type MonitoringJobDefinition struct {
	BaselineConfig             *MonitoringBaselineConfig    `json:"BaselineConfig"`
	Environment                map[string]string            `json:"Environment"`
	MonitoringAppSpecification MonitoringAppSpecification   `json:"MonitoringAppSpecification"`
	MonitoringInputs           []MonitoringInput            `json:"MonitoringInputs"`
	MonitoringOutputConfig     MonitoringOutputConfig       `json:"MonitoringOutputConfig"`
	MonitoringResources        MonitoringResources          `json:"MonitoringResources"`
	NetworkConfig              *NetworkConfig               `json:"NetworkConfig"`
	RoleArn                    string                       `json:"RoleArn"`
	StoppingCondition          *MonitoringStoppingCondition `json:"StoppingCondition"`
}
