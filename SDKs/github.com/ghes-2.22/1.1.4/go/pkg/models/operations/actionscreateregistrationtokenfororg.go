package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsCreateRegistrationTokenForOrgPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type ActionsCreateRegistrationTokenForOrgRequest struct {
	PathParams ActionsCreateRegistrationTokenForOrgPathParams
}

type ActionsCreateRegistrationTokenForOrgResponse struct {
	ContentType         string
	StatusCode          int64
	AuthenticationToken *shared.AuthenticationToken
}
