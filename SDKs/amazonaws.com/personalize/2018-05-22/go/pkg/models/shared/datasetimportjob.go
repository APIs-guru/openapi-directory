package shared

import (
	"time"
)

type DatasetImportJob struct {
	CreationDateTime    *time.Time  `json:"creationDateTime"`
	DataSource          *DataSource `json:"dataSource"`
	DatasetArn          *string     `json:"datasetArn"`
	DatasetImportJobArn *string     `json:"datasetImportJobArn"`
	FailureReason       *string     `json:"failureReason"`
	JobName             *string     `json:"jobName"`
	LastUpdatedDateTime *time.Time  `json:"lastUpdatedDateTime"`
	RoleArn             *string     `json:"roleArn"`
	Status              *string     `json:"status"`
}
