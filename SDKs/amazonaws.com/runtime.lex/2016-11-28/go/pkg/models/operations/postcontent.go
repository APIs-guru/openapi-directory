package operations

import (
	"openapi/pkg/models/shared"
)

type PostContentPathParams struct {
	BotAlias string `pathParam:"style=simple,explode=false,name=botAlias"`
	BotName  string `pathParam:"style=simple,explode=false,name=botName"`
	UserID   string `pathParam:"style=simple,explode=false,name=userId"`
}

type PostContentHeaders struct {
	Accept                   *string `header:"style=simple,explode=false,name=Accept"`
	ContentType              string  `header:"style=simple,explode=false,name=Content-Type"`
	XAmzAlgorithm            *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256        *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential           *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                 *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken        *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature            *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders        *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzLexActiveContexts    *string `header:"style=simple,explode=false,name=x-amz-lex-active-contexts"`
	XAmzLexRequestAttributes *string `header:"style=simple,explode=false,name=x-amz-lex-request-attributes"`
	XAmzLexSessionAttributes *string `header:"style=simple,explode=false,name=x-amz-lex-session-attributes"`
}

type PostContentRequestBody struct {
	InputStream string `json:"inputStream"`
}

type PostContentRequest struct {
	PathParams PostContentPathParams
	Headers    PostContentHeaders
	Request    PostContentRequestBody `request:"mediaType=application/json"`
}

type PostContentResponse struct {
	BadGatewayException           *interface{}
	BadRequestException           *interface{}
	ConflictException             *interface{}
	ContentType                   string
	DependencyFailedException     *interface{}
	InternalFailureException      *interface{}
	LimitExceededException        *interface{}
	LoopDetectedException         *interface{}
	NotAcceptableException        *interface{}
	NotFoundException             *interface{}
	PostContentResponse           *shared.PostContentResponse
	RequestTimeoutException       *interface{}
	StatusCode                    int64
	UnsupportedMediaTypeException *interface{}
}
