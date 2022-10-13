package shared

type CreateModelBiasJobDefinitionRequest struct {
	JobDefinitionName         string                       `json:"JobDefinitionName"`
	JobResources              MonitoringResources          `json:"JobResources"`
	ModelBiasAppSpecification ModelBiasAppSpecification    `json:"ModelBiasAppSpecification"`
	ModelBiasBaselineConfig   *ModelBiasBaselineConfig     `json:"ModelBiasBaselineConfig"`
	ModelBiasJobInput         ModelBiasJobInput            `json:"ModelBiasJobInput"`
	ModelBiasJobOutputConfig  MonitoringOutputConfig       `json:"ModelBiasJobOutputConfig"`
	NetworkConfig             *MonitoringNetworkConfig     `json:"NetworkConfig"`
	RoleArn                   string                       `json:"RoleArn"`
	StoppingCondition         *MonitoringStoppingCondition `json:"StoppingCondition"`
	Tags                      []Tag                        `json:"Tags"`
}
