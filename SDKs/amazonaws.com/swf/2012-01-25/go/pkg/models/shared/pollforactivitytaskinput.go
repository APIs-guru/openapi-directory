package shared

type PollForActivityTaskInput struct {
	Domain   string   `json:"domain"`
	Identity *string  `json:"identity,omitempty"`
	TaskList TaskList `json:"taskList"`
}
