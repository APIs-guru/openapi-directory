package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUploadTokensUploadTokenPathParams struct {
	UploadToken string `pathParam:"style=simple,explode=false,name=uploadToken"`
}

type DeleteUploadTokensUploadTokenSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type DeleteUploadTokensUploadTokenRequest struct {
	PathParams DeleteUploadTokensUploadTokenPathParams
	Security   DeleteUploadTokensUploadTokenSecurity
}

type DeleteUploadTokensUploadTokenResponse struct {
	ContentType string
	StatusCode  int64
	NotFound    *shared.NotFound
}
