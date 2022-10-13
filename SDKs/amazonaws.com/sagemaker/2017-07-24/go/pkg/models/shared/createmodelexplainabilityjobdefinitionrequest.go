package shared

type CreateModelExplainabilityJobDefinitionRequest struct {
	JobDefinitionName                   string                              `json:"JobDefinitionName"`
	JobResources                        MonitoringResources                 `json:"JobResources"`
	ModelExplainabilityAppSpecification ModelExplainabilityAppSpecification `json:"ModelExplainabilityAppSpecification"`
	ModelExplainabilityBaselineConfig   *ModelExplainabilityBaselineConfig  `json:"ModelExplainabilityBaselineConfig"`
	ModelExplainabilityJobInput         ModelExplainabilityJobInput         `json:"ModelExplainabilityJobInput"`
	ModelExplainabilityJobOutputConfig  MonitoringOutputConfig              `json:"ModelExplainabilityJobOutputConfig"`
	NetworkConfig                       *MonitoringNetworkConfig            `json:"NetworkConfig"`
	RoleArn                             string                              `json:"RoleArn"`
	StoppingCondition                   *MonitoringStoppingCondition        `json:"StoppingCondition"`
	Tags                                []Tag                               `json:"Tags"`
}
