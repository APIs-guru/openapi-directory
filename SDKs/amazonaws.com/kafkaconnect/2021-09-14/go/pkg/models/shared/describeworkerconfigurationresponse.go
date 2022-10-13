package shared

import (
	"time"
)

type DescribeWorkerConfigurationResponse struct {
	CreationTime           *time.Time                              `json:"creationTime"`
	Description            *string                                 `json:"description"`
	LatestRevision         *WorkerConfigurationRevisionDescription `json:"latestRevision"`
	Name                   *string                                 `json:"name"`
	WorkerConfigurationArn *string                                 `json:"workerConfigurationArn"`
}
