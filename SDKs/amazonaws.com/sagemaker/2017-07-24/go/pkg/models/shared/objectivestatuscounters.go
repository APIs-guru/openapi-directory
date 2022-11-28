package shared

// ObjectiveStatusCounters
// Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process.
type ObjectiveStatusCounters struct {
	Failed    *int64 `json:"Failed,omitempty"`
	Pending   *int64 `json:"Pending,omitempty"`
	Succeeded *int64 `json:"Succeeded,omitempty"`
}
