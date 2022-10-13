package operations

type GetPipelineVariableForTeamPathParams struct {
	Username     string `pathParam:"style=simple,explode=false,name=username"`
	VariableUUID string `pathParam:"style=simple,explode=false,name=variable_uuid"`
}

type GetPipelineVariableForTeamRequest struct {
	PathParams GetPipelineVariableForTeamPathParams
}

type GetPipelineVariableForTeamResponse struct {
	ContentType      string
	StatusCode       int64
	Error            map[string]interface{}
	PipelineVariable map[string]interface{}
}
