package shared

type CreateDataQualityJobDefinitionRequest struct {
	DataQualityAppSpecification DataQualityAppSpecification  `json:"DataQualityAppSpecification"`
	DataQualityBaselineConfig   *DataQualityBaselineConfig   `json:"DataQualityBaselineConfig,omitempty"`
	DataQualityJobInput         DataQualityJobInput          `json:"DataQualityJobInput"`
	DataQualityJobOutputConfig  MonitoringOutputConfig       `json:"DataQualityJobOutputConfig"`
	JobDefinitionName           string                       `json:"JobDefinitionName"`
	JobResources                MonitoringResources          `json:"JobResources"`
	NetworkConfig               *MonitoringNetworkConfig     `json:"NetworkConfig,omitempty"`
	RoleArn                     string                       `json:"RoleArn"`
	StoppingCondition           *MonitoringStoppingCondition `json:"StoppingCondition,omitempty"`
	Tags                        []Tag                        `json:"Tags,omitempty"`
}
