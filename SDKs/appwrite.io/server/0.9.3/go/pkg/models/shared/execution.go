package shared



type Execution struct {
    DollarID string `json:"$id"`
    DateCreated int32 `json:"dateCreated"`
    ExitCode int32 `json:"exitCode"`
    FunctionID string `json:"functionId"`
    Status string `json:"status"`
    Stderr string `json:"stderr"`
    Stdout string `json:"stdout"`
    Time float32 `json:"time"`
    Trigger string `json:"trigger"`
    
}

