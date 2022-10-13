package shared

type IssueEventRename struct {
	From string `json:"from"`
	To   string `json:"to"`
}
