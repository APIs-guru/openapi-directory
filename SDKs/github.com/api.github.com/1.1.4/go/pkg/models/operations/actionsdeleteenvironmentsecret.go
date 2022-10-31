package operations

type ActionsDeleteEnvironmentSecretPathParams struct {
	EnvironmentName string `pathParam:"style=simple,explode=false,name=environment_name"`
	RepositoryID    int64  `pathParam:"style=simple,explode=false,name=repository_id"`
	SecretName      string `pathParam:"style=simple,explode=false,name=secret_name"`
}

type ActionsDeleteEnvironmentSecretRequest struct {
	PathParams ActionsDeleteEnvironmentSecretPathParams
}

type ActionsDeleteEnvironmentSecretResponse struct {
	ContentType string
	StatusCode  int64
}
