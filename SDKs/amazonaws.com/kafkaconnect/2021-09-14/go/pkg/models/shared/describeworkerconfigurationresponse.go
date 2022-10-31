package shared

import (
"time")

type DescribeWorkerConfigurationResponse struct {
    CreationTime *time.Time `json:"creationTime,omitempty"`
    Description *string `json:"description,omitempty"`
    LatestRevision *WorkerConfigurationRevisionDescription `json:"latestRevision,omitempty"`
    Name *string `json:"name,omitempty"`
    WorkerConfigurationArn *string `json:"workerConfigurationArn,omitempty"`
    
}

