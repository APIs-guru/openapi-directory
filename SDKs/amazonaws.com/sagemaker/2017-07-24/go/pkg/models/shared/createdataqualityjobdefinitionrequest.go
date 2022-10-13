package shared

type CreateDataQualityJobDefinitionRequest struct {
	DataQualityAppSpecification DataQualityAppSpecification  `json:"DataQualityAppSpecification"`
	DataQualityBaselineConfig   *DataQualityBaselineConfig   `json:"DataQualityBaselineConfig"`
	DataQualityJobInput         DataQualityJobInput          `json:"DataQualityJobInput"`
	DataQualityJobOutputConfig  MonitoringOutputConfig       `json:"DataQualityJobOutputConfig"`
	JobDefinitionName           string                       `json:"JobDefinitionName"`
	JobResources                MonitoringResources          `json:"JobResources"`
	NetworkConfig               *MonitoringNetworkConfig     `json:"NetworkConfig"`
	RoleArn                     string                       `json:"RoleArn"`
	StoppingCondition           *MonitoringStoppingCondition `json:"StoppingCondition"`
	Tags                        []Tag                        `json:"Tags"`
}
