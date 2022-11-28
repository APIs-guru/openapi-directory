package shared

// Job
// The Cloud Batch Job description.
type Job struct {
	AllocationPolicy *AllocationPolicy `json:"allocationPolicy,omitempty"`
	CreateTime       *string           `json:"createTime,omitempty"`
	Labels           map[string]string `json:"labels,omitempty"`
	LogsPolicy       *LogsPolicy       `json:"logsPolicy,omitempty"`
	Name             *string           `json:"name,omitempty"`
	Notifications    []JobNotification `json:"notifications,omitempty"`
	Priority         *string           `json:"priority,omitempty"`
	Status           *JobStatus        `json:"status,omitempty"`
	TaskGroups       []TaskGroup       `json:"taskGroups,omitempty"`
	UID              *string           `json:"uid,omitempty"`
	UpdateTime       *string           `json:"updateTime,omitempty"`
}

// JobInput
// The Cloud Batch Job description.
type JobInput struct {
	AllocationPolicy *AllocationPolicy `json:"allocationPolicy,omitempty"`
	Labels           map[string]string `json:"labels,omitempty"`
	LogsPolicy       *LogsPolicy       `json:"logsPolicy,omitempty"`
	Notifications    []JobNotification `json:"notifications,omitempty"`
	Priority         *string           `json:"priority,omitempty"`
	Status           *JobStatus        `json:"status,omitempty"`
	TaskGroups       []TaskGroupInput  `json:"taskGroups,omitempty"`
}
