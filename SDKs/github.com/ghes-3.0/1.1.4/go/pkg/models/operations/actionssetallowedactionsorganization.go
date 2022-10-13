package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsSetAllowedActionsOrganizationPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type ActionsSetAllowedActionsOrganizationRequest struct {
	PathParams ActionsSetAllowedActionsOrganizationPathParams
	Request    *shared.SelectedActions `request:"mediaType=application/json"`
}

type ActionsSetAllowedActionsOrganizationResponse struct {
	ContentType string
	StatusCode  int64
}
