package shared

import (
	"time"
)

type DescribeModelBiasJobDefinitionResponse struct {
	CreationTime              time.Time                    `json:"CreationTime"`
	JobDefinitionArn          string                       `json:"JobDefinitionArn"`
	JobDefinitionName         string                       `json:"JobDefinitionName"`
	JobResources              MonitoringResources          `json:"JobResources"`
	ModelBiasAppSpecification ModelBiasAppSpecification    `json:"ModelBiasAppSpecification"`
	ModelBiasBaselineConfig   *ModelBiasBaselineConfig     `json:"ModelBiasBaselineConfig"`
	ModelBiasJobInput         ModelBiasJobInput            `json:"ModelBiasJobInput"`
	ModelBiasJobOutputConfig  MonitoringOutputConfig       `json:"ModelBiasJobOutputConfig"`
	NetworkConfig             *MonitoringNetworkConfig     `json:"NetworkConfig"`
	RoleArn                   string                       `json:"RoleArn"`
	StoppingCondition         *MonitoringStoppingCondition `json:"StoppingCondition"`
}
