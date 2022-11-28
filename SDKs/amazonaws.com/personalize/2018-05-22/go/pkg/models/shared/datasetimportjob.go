package shared

import (
	"time"
)

// DatasetImportJob
// <p>Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. For more information, see <a>CreateDatasetImportJob</a>.</p> <p>A dataset import job can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> </ul>
type DatasetImportJob struct {
	CreationDateTime    *time.Time  `json:"creationDateTime,omitempty"`
	DataSource          *DataSource `json:"dataSource,omitempty"`
	DatasetArn          *string     `json:"datasetArn,omitempty"`
	DatasetImportJobArn *string     `json:"datasetImportJobArn,omitempty"`
	FailureReason       *string     `json:"failureReason,omitempty"`
	JobName             *string     `json:"jobName,omitempty"`
	LastUpdatedDateTime *time.Time  `json:"lastUpdatedDateTime,omitempty"`
	RoleArn             *string     `json:"roleArn,omitempty"`
	Status              *string     `json:"status,omitempty"`
}
