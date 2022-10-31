package shared

type DeletePipelineRequest struct {
	ClientRequestToken string `json:"ClientRequestToken"`
	PipelineName       string `json:"PipelineName"`
}
