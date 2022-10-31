package shared

import (
"time")

type DescribeExperimentResponse struct {
    CreatedBy *UserContext `json:"CreatedBy,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    Description *string `json:"Description,omitempty"`
    DisplayName *string `json:"DisplayName,omitempty"`
    ExperimentArn *string `json:"ExperimentArn,omitempty"`
    ExperimentName *string `json:"ExperimentName,omitempty"`
    LastModifiedBy *UserContext `json:"LastModifiedBy,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    Source *ExperimentSource `json:"Source,omitempty"`
    
}

