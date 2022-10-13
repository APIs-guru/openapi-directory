package operations

type CreatePipelineVariableForTeamPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type CreatePipelineVariableForTeamQueryParams struct {
	Workspace string `queryParam:"style=form,explode=true,name=workspace"`
}

type CreatePipelineVariableForTeamRequest struct {
	PathParams  CreatePipelineVariableForTeamPathParams
	QueryParams CreatePipelineVariableForTeamQueryParams
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type CreatePipelineVariableForTeamResponse struct {
	ContentType      string
	Headers          map[string][]string
	StatusCode       int64
	Error            map[string]interface{}
	PipelineVariable map[string]interface{}
}
