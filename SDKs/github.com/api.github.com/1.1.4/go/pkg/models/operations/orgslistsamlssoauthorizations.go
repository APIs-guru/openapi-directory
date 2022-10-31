package operations

import (
	"openapi/pkg/models/shared"
)

type OrgsListSamlSsoAuthorizationsPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type OrgsListSamlSsoAuthorizationsRequest struct {
	PathParams OrgsListSamlSsoAuthorizationsPathParams
}

type OrgsListSamlSsoAuthorizationsResponse struct {
	ContentType              string
	StatusCode               int64
	CredentialAuthorizations []shared.CredentialAuthorization
}
