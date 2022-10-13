package shared

type PollForDecisionTaskInput struct {
	Domain          string   `json:"domain"`
	Identity        *string  `json:"identity"`
	MaximumPageSize *int64   `json:"maximumPageSize"`
	NextPageToken   *string  `json:"nextPageToken"`
	ReverseOrder    *bool    `json:"reverseOrder"`
	TaskList        TaskList `json:"taskList"`
}
