package operations

import (
	"openapi/pkg/models/shared"
)

type GetBotAliasPathParams struct {
	BotName string `pathParam:"style=simple,explode=false,name=botName"`
	Name    string `pathParam:"style=simple,explode=false,name=name"`
}

type GetBotAliasHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBotAliasRequest struct {
	PathParams GetBotAliasPathParams
	Headers    GetBotAliasHeaders
}

type GetBotAliasResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetBotAliasResponse      *shared.GetBotAliasResponse
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
}
