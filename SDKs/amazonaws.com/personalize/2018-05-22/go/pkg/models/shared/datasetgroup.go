package shared

import (
	"time"
)

type DatasetGroup struct {
	CreationDateTime    *time.Time `json:"creationDateTime"`
	DatasetGroupArn     *string    `json:"datasetGroupArn"`
	FailureReason       *string    `json:"failureReason"`
	KmsKeyArn           *string    `json:"kmsKeyArn"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime"`
	Name                *string    `json:"name"`
	RoleArn             *string    `json:"roleArn"`
	Status              *string    `json:"status"`
}
