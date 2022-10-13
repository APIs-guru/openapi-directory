package shared

type ResolvedAttributes struct {
	AutoMlJobObjective *AutoMlJobObjective          `json:"AutoMLJobObjective"`
	CompletionCriteria *AutoMlJobCompletionCriteria `json:"CompletionCriteria"`
	ProblemType        *ProblemTypeEnum             `json:"ProblemType"`
}
