package shared

type MultiConditionalSplitActivity struct {
	Branches           []MultiConditionalBranch `json:"Branches"`
	DefaultActivity    *string                  `json:"DefaultActivity"`
	EvaluationWaitTime *WaitTime                `json:"EvaluationWaitTime"`
}
