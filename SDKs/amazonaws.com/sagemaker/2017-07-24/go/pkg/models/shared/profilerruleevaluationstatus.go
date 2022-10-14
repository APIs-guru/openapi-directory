package shared

import (
	"time"
)

type ProfilerRuleEvaluationStatus struct {
	LastModifiedTime      *time.Time                `json:"LastModifiedTime,omitempty"`
	RuleConfigurationName *string                   `json:"RuleConfigurationName,omitempty"`
	RuleEvaluationJobArn  *string                   `json:"RuleEvaluationJobArn,omitempty"`
	RuleEvaluationStatus  *RuleEvaluationStatusEnum `json:"RuleEvaluationStatus,omitempty"`
	StatusDetails         *string                   `json:"StatusDetails,omitempty"`
}
