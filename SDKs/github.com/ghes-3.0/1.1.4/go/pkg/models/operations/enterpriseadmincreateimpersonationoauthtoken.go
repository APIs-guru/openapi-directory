package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminCreateImpersonationOAuthTokenPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type EnterpriseAdminCreateImpersonationOAuthTokenRequestBody struct {
	Scopes []string `json:"scopes,omitempty"`
}

type EnterpriseAdminCreateImpersonationOAuthTokenRequest struct {
	PathParams EnterpriseAdminCreateImpersonationOAuthTokenPathParams
	Request    *EnterpriseAdminCreateImpersonationOAuthTokenRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminCreateImpersonationOAuthTokenResponse struct {
	ContentType   string
	StatusCode    int64
	Authorization *shared.Authorization
}
