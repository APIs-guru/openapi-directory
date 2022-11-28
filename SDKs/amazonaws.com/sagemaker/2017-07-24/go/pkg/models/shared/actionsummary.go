package shared

import (
	"time"
)

// ActionSummary
// Lists the properties of an <i>action</i>. An action represents an action or activity. Some examples are a workflow step and a model deployment. Generally, an action involves at least one input artifact or output artifact.
type ActionSummary struct {
	ActionArn        *string           `json:"ActionArn,omitempty"`
	ActionName       *string           `json:"ActionName,omitempty"`
	ActionType       *string           `json:"ActionType,omitempty"`
	CreationTime     *time.Time        `json:"CreationTime,omitempty"`
	LastModifiedTime *time.Time        `json:"LastModifiedTime,omitempty"`
	Source           *ActionSource     `json:"Source,omitempty"`
	Status           *ActionStatusEnum `json:"Status,omitempty"`
}
