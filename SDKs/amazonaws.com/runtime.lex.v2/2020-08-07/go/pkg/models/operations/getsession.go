package operations

import (
	"openapi/pkg/models/shared"
)

type GetSessionPathParams struct {
	BotAliasID string `pathParam:"style=simple,explode=false,name=botAliasId"`
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
	LocaleID   string `pathParam:"style=simple,explode=false,name=localeId"`
	SessionID  string `pathParam:"style=simple,explode=false,name=sessionId"`
}

type GetSessionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSessionRequest struct {
	PathParams GetSessionPathParams
	Headers    GetSessionHeaders
}

type GetSessionResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetSessionResponse        *shared.GetSessionResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
