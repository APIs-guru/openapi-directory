package shared

type CreateModelBiasJobDefinitionRequest struct {
	JobDefinitionName         string                       `json:"JobDefinitionName"`
	JobResources              MonitoringResources          `json:"JobResources"`
	ModelBiasAppSpecification ModelBiasAppSpecification    `json:"ModelBiasAppSpecification"`
	ModelBiasBaselineConfig   *ModelBiasBaselineConfig     `json:"ModelBiasBaselineConfig,omitempty"`
	ModelBiasJobInput         ModelBiasJobInput            `json:"ModelBiasJobInput"`
	ModelBiasJobOutputConfig  MonitoringOutputConfig       `json:"ModelBiasJobOutputConfig"`
	NetworkConfig             *MonitoringNetworkConfig     `json:"NetworkConfig,omitempty"`
	RoleArn                   string                       `json:"RoleArn"`
	StoppingCondition         *MonitoringStoppingCondition `json:"StoppingCondition,omitempty"`
	Tags                      []Tag                        `json:"Tags,omitempty"`
}
