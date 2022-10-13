package operations

import (
	"openapi/pkg/models/shared"
)

type RecognizeTextPathParams struct {
	BotAliasID string `pathParam:"style=simple,explode=false,name=botAliasId"`
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
	LocaleID   string `pathParam:"style=simple,explode=false,name=localeId"`
	SessionID  string `pathParam:"style=simple,explode=false,name=sessionId"`
}

type RecognizeTextHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type RecognizeTextRequestBodySessionState struct {
	ActiveContexts       []shared.ActiveContext `json:"activeContexts"`
	DialogAction         *shared.DialogAction   `json:"dialogAction"`
	Intent               *shared.Intent         `json:"intent"`
	OriginatingRequestID *string                `json:"originatingRequestId"`
	SessionAttributes    map[string]string      `json:"sessionAttributes"`
}

type RecognizeTextRequestBody struct {
	RequestAttributes map[string]string                     `json:"requestAttributes"`
	SessionState      *RecognizeTextRequestBodySessionState `json:"sessionState"`
	Text              string                                `json:"text"`
}

type RecognizeTextRequest struct {
	PathParams RecognizeTextPathParams
	Headers    RecognizeTextHeaders
	Request    RecognizeTextRequestBody `request:"mediaType=application/json"`
}

type RecognizeTextResponse struct {
	AccessDeniedException     *interface{}
	BadGatewayException       *interface{}
	ConflictException         *interface{}
	ContentType               string
	DependencyFailedException *interface{}
	InternalServerException   *interface{}
	RecognizeTextResponse     *shared.RecognizeTextResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
