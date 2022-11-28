package shared

import (
	"time"
)

// ExperimentSummary
// A summary of the properties of an experiment. To get the complete set of properties, call the <a>DescribeExperiment</a> API and provide the <code>ExperimentName</code>.
type ExperimentSummary struct {
	CreationTime     *time.Time        `json:"CreationTime,omitempty"`
	DisplayName      *string           `json:"DisplayName,omitempty"`
	ExperimentArn    *string           `json:"ExperimentArn,omitempty"`
	ExperimentName   *string           `json:"ExperimentName,omitempty"`
	ExperimentSource *ExperimentSource `json:"ExperimentSource,omitempty"`
	LastModifiedTime *time.Time        `json:"LastModifiedTime,omitempty"`
}
