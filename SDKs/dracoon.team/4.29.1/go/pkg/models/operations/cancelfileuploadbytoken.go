package operations

import (
	"openapi/pkg/models/shared"
)

type CancelFileUploadByTokenPathParams struct {
	Token string `pathParam:"style=simple,explode=false,name=token"`
}

type CancelFileUploadByTokenRequest struct {
	PathParams CancelFileUploadByTokenPathParams
}

type CancelFileUploadByTokenResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
