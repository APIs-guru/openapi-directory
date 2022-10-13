package shared

type ConditionalSplitActivity struct {
	Condition          *Condition `json:"Condition"`
	EvaluationWaitTime *WaitTime  `json:"EvaluationWaitTime"`
	FalseActivity      *string    `json:"FalseActivity"`
	TrueActivity       *string    `json:"TrueActivity"`
}
