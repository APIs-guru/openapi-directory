package shared

type PollForActivityTaskInput struct {
	Domain   string   `json:"domain"`
	Identity *string  `json:"identity"`
	TaskList TaskList `json:"taskList"`
}
