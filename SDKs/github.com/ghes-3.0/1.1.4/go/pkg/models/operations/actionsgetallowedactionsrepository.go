package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsGetAllowedActionsRepositoryPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActionsGetAllowedActionsRepositoryRequest struct {
	PathParams ActionsGetAllowedActionsRepositoryPathParams
}

type ActionsGetAllowedActionsRepositoryResponse struct {
	ContentType     string
	StatusCode      int64
	SelectedActions *shared.SelectedActions
}
