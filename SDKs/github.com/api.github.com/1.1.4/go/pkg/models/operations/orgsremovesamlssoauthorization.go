package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsRemoveSamlSsoAuthorizationPathParams struct {
	CredentialID int64  `pathParam:"style=simple,explode=false,name=credential_id"`
	Org          string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsRemoveSamlSsoAuthorizationRequest struct {
	PathParams OrgsRemoveSamlSsoAuthorizationPathParams
}

type OrgsRemoveSamlSsoAuthorizationResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
}
