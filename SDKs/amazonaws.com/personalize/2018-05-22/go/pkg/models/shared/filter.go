package shared

import (
	"time"
)

type Filter struct {
	CreationDateTime    *time.Time `json:"creationDateTime,omitempty"`
	DatasetGroupArn     *string    `json:"datasetGroupArn,omitempty"`
	FailureReason       *string    `json:"failureReason,omitempty"`
	FilterArn           *string    `json:"filterArn,omitempty"`
	FilterExpression    *string    `json:"filterExpression,omitempty"`
	LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
	Name                *string    `json:"name,omitempty"`
	Status              *string    `json:"status,omitempty"`
}
