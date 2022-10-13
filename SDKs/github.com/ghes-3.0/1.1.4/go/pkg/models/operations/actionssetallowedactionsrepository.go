package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsSetAllowedActionsRepositoryPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActionsSetAllowedActionsRepositoryRequest struct {
	PathParams ActionsSetAllowedActionsRepositoryPathParams
	Request    *shared.SelectedActions `request:"mediaType=application/json"`
}

type ActionsSetAllowedActionsRepositoryResponse struct {
	ContentType string
	StatusCode  int64
}
