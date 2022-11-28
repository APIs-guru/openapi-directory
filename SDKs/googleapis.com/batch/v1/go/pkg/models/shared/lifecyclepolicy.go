package shared

type LifecyclePolicyActionEnum string

const (
	LifecyclePolicyActionEnumActionUnspecified LifecyclePolicyActionEnum = "ACTION_UNSPECIFIED"
	LifecyclePolicyActionEnumRetryTask         LifecyclePolicyActionEnum = "RETRY_TASK"
	LifecyclePolicyActionEnumFailTask          LifecyclePolicyActionEnum = "FAIL_TASK"
)

// LifecyclePolicy
// LifecyclePolicy describes how to deal with task failures based on different conditions.
type LifecyclePolicy struct {
	Action          *LifecyclePolicyActionEnum `json:"action,omitempty"`
	ActionCondition *ActionCondition           `json:"actionCondition,omitempty"`
}
