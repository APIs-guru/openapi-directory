package operations

import (
	"openapi/pkg/models/shared"
)

type RecognizeUtterancePathParams struct {
	BotAliasID string `pathParam:"style=simple,explode=false,name=botAliasId"`
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
	LocaleID   string `pathParam:"style=simple,explode=false,name=localeId"`
	SessionID  string `pathParam:"style=simple,explode=false,name=sessionId"`
}

type RecognizeUtteranceHeaders struct {
	ContentType              string  `header:"style=simple,explode=false,name=Content-Type"`
	ResponseContentType      *string `header:"style=simple,explode=false,name=Response-Content-Type"`
	XAmzAlgorithm            *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256        *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential           *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                 *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken        *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature            *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders        *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzLexRequestAttributes *string `header:"style=simple,explode=false,name=x-amz-lex-request-attributes"`
	XAmzLexSessionState      *string `header:"style=simple,explode=false,name=x-amz-lex-session-state"`
}

type RecognizeUtteranceRequestBody struct {
	InputStream *string `json:"inputStream,omitempty"`
}

type RecognizeUtteranceRequest struct {
	PathParams RecognizeUtterancePathParams
	Headers    RecognizeUtteranceHeaders
	Request    RecognizeUtteranceRequestBody `request:"mediaType=application/json"`
}

type RecognizeUtteranceResponse struct {
	AccessDeniedException      *interface{}
	BadGatewayException        *interface{}
	ConflictException          *interface{}
	ContentType                string
	DependencyFailedException  *interface{}
	InternalServerException    *interface{}
	RecognizeUtteranceResponse *shared.RecognizeUtteranceResponse
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	ValidationException        *interface{}
}
