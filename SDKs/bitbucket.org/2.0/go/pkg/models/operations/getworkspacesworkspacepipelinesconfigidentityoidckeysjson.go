package operations

type GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONPathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONRequest struct {
	PathParams GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONPathParams
}

type GetWorkspacesWorkspacePipelinesConfigIdentityOidcKeysJSONResponse struct {
	ContentType string
	StatusCode  int64
}
