package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsGetOrgSecretPathParams struct {
	Org        string `pathParam:"style=simple,explode=false,name=org"`
	SecretName string `pathParam:"style=simple,explode=false,name=secret_name"`
}

type ActionsGetOrgSecretRequest struct {
	PathParams ActionsGetOrgSecretPathParams
}

type ActionsGetOrgSecretResponse struct {
	ContentType               string
	StatusCode                int64
	OrganizationActionsSecret *shared.OrganizationActionsSecret
}
