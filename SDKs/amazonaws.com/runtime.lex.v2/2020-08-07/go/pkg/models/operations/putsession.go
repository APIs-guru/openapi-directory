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
	ResponseContentType *string `header:"style=simple,explode=false,name=ResponseContentType"`
	XAmzAlgorithm       *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256   *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential      *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate            *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken   *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature       *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders   *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutSessionRequestBodySessionState struct {
	ActiveContexts       []shared.ActiveContext `json:"activeContexts,omitempty"`
	DialogAction         *shared.DialogAction   `json:"dialogAction,omitempty"`
	Intent               *shared.Intent         `json:"intent,omitempty"`
	OriginatingRequestID *string                `json:"originatingRequestId,omitempty"`
	SessionAttributes    map[string]string      `json:"sessionAttributes,omitempty"`
}

type PutSessionRequestBody struct {
	Messages          []shared.Message                  `json:"messages,omitempty"`
	RequestAttributes map[string]string                 `json:"requestAttributes,omitempty"`
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
