package shared

import (
	"time"
)

// ProfilerRuleEvaluationStatus
// Information about the status of the rule evaluation.
type ProfilerRuleEvaluationStatus struct {
	LastModifiedTime      *time.Time                `json:"LastModifiedTime,omitempty"`
	RuleConfigurationName *string                   `json:"RuleConfigurationName,omitempty"`
	RuleEvaluationJobArn  *string                   `json:"RuleEvaluationJobArn,omitempty"`
	RuleEvaluationStatus  *RuleEvaluationStatusEnum `json:"RuleEvaluationStatus,omitempty"`
	StatusDetails         *string                   `json:"StatusDetails,omitempty"`
}
