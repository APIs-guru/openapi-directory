package operations

type ActionsAddSelectedRepoToOrgSecretPathParams struct {
	Org          string `pathParam:"style=simple,explode=false,name=org"`
	RepositoryID int64  `pathParam:"style=simple,explode=false,name=repository_id"`
	SecretName   string `pathParam:"style=simple,explode=false,name=secret_name"`
}

type ActionsAddSelectedRepoToOrgSecretRequest struct {
	PathParams ActionsAddSelectedRepoToOrgSecretPathParams
}

type ActionsAddSelectedRepoToOrgSecretResponse struct {
	ContentType string
	StatusCode  int64
}
