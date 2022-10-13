package operations

import (
	"openapi/pkg/models/shared"
)

type PutSessionPathParams struct {
	BotAliasID string `pathParam:"style=simple,explode=false,name=botAliasId"`
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
	LocaleID   string `pathParam:"style=simple,explode=false,name=localeId"`
	SessionID  string `pathParam:"style=simple,explode=false,name=sessionId"`
}

type PutSessionHeaders struct {
	ResponseContentType *string `header:"name=ResponseContentType"`
	XAmzAlgorithm       *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256   *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential      *string `header:"name=X-Amz-Credential"`
	XAmzDate            *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken   *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature       *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders   *string `header:"name=X-Amz-SignedHeaders"`
}

type PutSessionRequestBodySessionState struct {
	ActiveContexts       []shared.ActiveContext `json:"activeContexts"`
	DialogAction         *shared.DialogAction   `json:"dialogAction"`
	Intent               *shared.Intent         `json:"intent"`
	OriginatingRequestID *string                `json:"originatingRequestId"`
	SessionAttributes    map[string]string      `json:"sessionAttributes"`
}

type PutSessionRequestBody struct {
	Messages          []shared.Message                  `json:"messages"`
	RequestAttributes map[string]string                 `json:"requestAttributes"`
	SessionState      PutSessionRequestBodySessionState `json:"sessionState"`
}

type PutSessionRequest struct {
	PathParams PutSessionPathParams
	Headers    PutSessionHeaders
	Request    PutSessionRequestBody `request:"mediaType=application/json"`
}

type PutSessionResponse struct {
	AccessDeniedException     *interface{}
	BadGatewayException       *interface{}
	ConflictException         *interface{}
	ContentType               string
	DependencyFailedException *interface{}
	InternalServerException   *interface{}
	PutSessionResponse        *shared.PutSessionResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
