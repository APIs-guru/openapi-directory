package shared



type CreateModelQualityJobDefinitionRequest struct {
    JobDefinitionName string `json:"JobDefinitionName"`
    JobResources MonitoringResources `json:"JobResources"`
    ModelQualityAppSpecification ModelQualityAppSpecification `json:"ModelQualityAppSpecification"`
    ModelQualityBaselineConfig *ModelQualityBaselineConfig `json:"ModelQualityBaselineConfig,omitempty"`
    ModelQualityJobInput ModelQualityJobInput `json:"ModelQualityJobInput"`
    ModelQualityJobOutputConfig MonitoringOutputConfig `json:"ModelQualityJobOutputConfig"`
    NetworkConfig *MonitoringNetworkConfig `json:"NetworkConfig,omitempty"`
    RoleArn string `json:"RoleArn"`
    StoppingCondition *MonitoringStoppingCondition `json:"StoppingCondition,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

