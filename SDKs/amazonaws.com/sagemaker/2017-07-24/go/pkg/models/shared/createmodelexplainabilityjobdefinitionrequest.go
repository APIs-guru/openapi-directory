package shared

type CreateModelExplainabilityJobDefinitionRequest struct {
	JobDefinitionName                   string                              `json:"JobDefinitionName"`
	JobResources                        MonitoringResources                 `json:"JobResources"`
	ModelExplainabilityAppSpecification ModelExplainabilityAppSpecification `json:"ModelExplainabilityAppSpecification"`
	ModelExplainabilityBaselineConfig   *ModelExplainabilityBaselineConfig  `json:"ModelExplainabilityBaselineConfig,omitempty"`
	ModelExplainabilityJobInput         ModelExplainabilityJobInput         `json:"ModelExplainabilityJobInput"`
	ModelExplainabilityJobOutputConfig  MonitoringOutputConfig              `json:"ModelExplainabilityJobOutputConfig"`
	NetworkConfig                       *MonitoringNetworkConfig            `json:"NetworkConfig,omitempty"`
	RoleArn                             string                              `json:"RoleArn"`
	StoppingCondition                   *MonitoringStoppingCondition        `json:"StoppingCondition,omitempty"`
	Tags                                []Tag                               `json:"Tags,omitempty"`
}
