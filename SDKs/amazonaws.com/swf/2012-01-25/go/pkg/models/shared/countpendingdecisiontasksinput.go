package shared



type CountPendingDecisionTasksInput struct {
    Domain string `json:"domain"`
    TaskList TaskList `json:"taskList"`
    
}

