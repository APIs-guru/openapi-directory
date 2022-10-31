package shared

type PollForDecisionTaskInput struct {
	Domain          string   `json:"domain"`
	Identity        *string  `json:"identity,omitempty"`
	MaximumPageSize *int64   `json:"maximumPageSize,omitempty"`
	NextPageToken   *string  `json:"nextPageToken,omitempty"`
	ReverseOrder    *bool    `json:"reverseOrder,omitempty"`
	TaskList        TaskList `json:"taskList"`
}
