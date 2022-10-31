package shared

import (
"time")

type DatasetGroup struct {
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    DatasetGroupArn *string `json:"datasetGroupArn,omitempty"`
    FailureReason *string `json:"failureReason,omitempty"`
    KmsKeyArn *string `json:"kmsKeyArn,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    Name *string `json:"name,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

