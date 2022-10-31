package shared

import (
"time")

type DatasetImportJob struct {
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    DataSource *DataSource `json:"dataSource,omitempty"`
    DatasetArn *string `json:"datasetArn,omitempty"`
    DatasetImportJobArn *string `json:"datasetImportJobArn,omitempty"`
    FailureReason *string `json:"failureReason,omitempty"`
    JobName *string `json:"jobName,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

