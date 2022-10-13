package shared

import (
	"time"
)

type DescribeModelQualityJobDefinitionResponse struct {
	CreationTime                 time.Time                    `json:"CreationTime"`
	JobDefinitionArn             string                       `json:"JobDefinitionArn"`
	JobDefinitionName            string                       `json:"JobDefinitionName"`
	JobResources                 MonitoringResources          `json:"JobResources"`
	ModelQualityAppSpecification ModelQualityAppSpecification `json:"ModelQualityAppSpecification"`
	ModelQualityBaselineConfig   *ModelQualityBaselineConfig  `json:"ModelQualityBaselineConfig"`
	ModelQualityJobInput         ModelQualityJobInput         `json:"ModelQualityJobInput"`
	ModelQualityJobOutputConfig  MonitoringOutputConfig       `json:"ModelQualityJobOutputConfig"`
	NetworkConfig                *MonitoringNetworkConfig     `json:"NetworkConfig"`
	RoleArn                      string                       `json:"RoleArn"`
	StoppingCondition            *MonitoringStoppingCondition `json:"StoppingCondition"`
}
