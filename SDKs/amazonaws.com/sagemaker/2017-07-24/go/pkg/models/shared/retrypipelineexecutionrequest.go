package shared



type RetryPipelineExecutionRequest struct {
    ClientRequestToken string `json:"ClientRequestToken"`
    PipelineExecutionArn string `json:"PipelineExecutionArn"`
    
}

