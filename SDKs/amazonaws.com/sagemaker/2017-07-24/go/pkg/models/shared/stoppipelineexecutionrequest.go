package shared



type StopPipelineExecutionRequest struct {
    ClientRequestToken string `json:"ClientRequestToken"`
    PipelineExecutionArn string `json:"PipelineExecutionArn"`
    
}

