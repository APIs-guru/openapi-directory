package operations

type ActionsDeleteRepoSecretPathParams struct {
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
	SecretName string `pathParam:"style=simple,explode=false,name=secret_name"`
}

type ActionsDeleteRepoSecretRequest struct {
	PathParams ActionsDeleteRepoSecretPathParams
}

type ActionsDeleteRepoSecretResponse struct {
	ContentType string
	StatusCode  int64
}
