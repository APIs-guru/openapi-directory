package shared



type CountPendingActivityTasksInput struct {
    Domain string `json:"domain"`
    TaskList TaskList `json:"taskList"`
    
}

