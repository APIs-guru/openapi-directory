package operations

type ActionsDeleteOrgSecretPathParams struct {
	Org        string `pathParam:"style=simple,explode=false,name=org"`
	SecretName string `pathParam:"style=simple,explode=false,name=secret_name"`
}

type ActionsDeleteOrgSecretRequest struct {
	PathParams ActionsDeleteOrgSecretPathParams
}

type ActionsDeleteOrgSecretResponse struct {
	ContentType string
	StatusCode  int64
}
