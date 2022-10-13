package shared

type ListCommandsResult struct {
	Commands  []Command `json:"Commands"`
	NextToken *string   `json:"NextToken"`
}
