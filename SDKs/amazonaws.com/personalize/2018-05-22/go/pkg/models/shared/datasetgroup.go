package shared

import (
	"time"
)

// DatasetGroup
// <p>A dataset group is a collection of related datasets (Interactions, User, and Item). You create a dataset group by calling <a>CreateDatasetGroup</a>. You then create a dataset and add it to a dataset group by calling <a>CreateDataset</a>. The dataset group is used to create and train a solution by calling <a>CreateSolution</a>. A dataset group can contain only one of each type of dataset.</p> <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in the group.</p>
type DatasetGroup struct {
	CreationDateTime    *time.Time `json:"creationDateTime,omitempty"`
	DatasetGroupArn     *string    `json:"datasetGroupArn,omitempty"`
	FailureReason       *string    `json:"failureReason,omitempty"`
	KmsKeyArn           *string    `json:"kmsKeyArn,omitempty"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
	Name                *string    `json:"name,omitempty"`
	RoleArn             *string    `json:"roleArn,omitempty"`
	Status              *string    `json:"status,omitempty"`
}
