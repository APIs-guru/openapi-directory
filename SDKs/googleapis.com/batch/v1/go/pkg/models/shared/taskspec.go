package shared

// TaskSpec
// Spec of a task
type TaskSpec struct {
	ComputeResource   *ComputeResource  `json:"computeResource,omitempty"`
	Environment       *Environment      `json:"environment,omitempty"`
	Environments      map[string]string `json:"environments,omitempty"`
	LifecyclePolicies []LifecyclePolicy `json:"lifecyclePolicies,omitempty"`
	MaxRetryCount     *int32            `json:"maxRetryCount,omitempty"`
	MaxRunDuration    *string           `json:"maxRunDuration,omitempty"`
	Runnables         []Runnable        `json:"runnables,omitempty"`
	Volumes           []Volume          `json:"volumes,omitempty"`
}
