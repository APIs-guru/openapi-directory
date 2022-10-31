package shared

import (
"time")

type DescribeDataQualityJobDefinitionResponse struct {
    CreationTime time.Time `json:"CreationTime"`
    DataQualityAppSpecification DataQualityAppSpecification `json:"DataQualityAppSpecification"`
    DataQualityBaselineConfig *DataQualityBaselineConfig `json:"DataQualityBaselineConfig,omitempty"`
    DataQualityJobInput DataQualityJobInput `json:"DataQualityJobInput"`
    DataQualityJobOutputConfig MonitoringOutputConfig `json:"DataQualityJobOutputConfig"`
    JobDefinitionArn string `json:"JobDefinitionArn"`
    JobDefinitionName string `json:"JobDefinitionName"`
    JobResources MonitoringResources `json:"JobResources"`
    NetworkConfig *MonitoringNetworkConfig `json:"NetworkConfig,omitempty"`
    RoleArn string `json:"RoleArn"`
    StoppingCondition *MonitoringStoppingCondition `json:"StoppingCondition,omitempty"`
    
}

