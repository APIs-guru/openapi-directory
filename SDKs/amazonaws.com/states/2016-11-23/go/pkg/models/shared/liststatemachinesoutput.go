package shared

type ListStateMachinesOutput struct {
	NextToken     *string                `json:"nextToken"`
	StateMachines []StateMachineListItem `json:"stateMachines"`
}
