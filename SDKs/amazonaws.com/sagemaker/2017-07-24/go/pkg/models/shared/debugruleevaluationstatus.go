package shared

import (
	"time"
)

type DebugRuleEvaluationStatus struct {
	LastModifiedTime      *time.Time                `json:"LastModifiedTime"`
	RuleConfigurationName *string                   `json:"RuleConfigurationName"`
	RuleEvaluationJobArn  *string                   `json:"RuleEvaluationJobArn"`
	RuleEvaluationStatus  *RuleEvaluationStatusEnum `json:"RuleEvaluationStatus"`
	StatusDetails         *string                   `json:"StatusDetails"`
}
