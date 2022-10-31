package shared



type ListStateMachinesOutput struct {
    NextToken *string `json:"nextToken,omitempty"`
    StateMachines []StateMachineListItem `json:"stateMachines"`
    
}

