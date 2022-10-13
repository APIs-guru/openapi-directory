package operations

type ActionsRemoveSelectedRepoFromOrgSecretPathParams struct {
	Org          string `pathParam:"style=simple,explode=false,name=org"`
	RepositoryID int64  `pathParam:"style=simple,explode=false,name=repository_id"`
	SecretName   string `pathParam:"style=simple,explode=false,name=secret_name"`
}

type ActionsRemoveSelectedRepoFromOrgSecretRequest struct {
	PathParams ActionsRemoveSelectedRepoFromOrgSecretPathParams
}

type ActionsRemoveSelectedRepoFromOrgSecretResponse struct {
	ContentType string
	StatusCode  int64
}
