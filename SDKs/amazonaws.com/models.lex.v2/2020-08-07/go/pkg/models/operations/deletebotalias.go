package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBotAliasPathParams struct {
	BotAliasID string `pathParam:"style=simple,explode=false,name=botAliasId"`
	BotID      string `pathParam:"style=simple,explode=false,name=botId"`
}

type DeleteBotAliasQueryParams struct {
	SkipResourceInUseCheck *bool `queryParam:"style=form,explode=true,name=skipResourceInUseCheck"`
}

type DeleteBotAliasHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteBotAliasRequest struct {
	PathParams  DeleteBotAliasPathParams
	QueryParams DeleteBotAliasQueryParams
	Headers     DeleteBotAliasHeaders
}

type DeleteBotAliasResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	DeleteBotAliasResponse        *shared.DeleteBotAliasResponse
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
