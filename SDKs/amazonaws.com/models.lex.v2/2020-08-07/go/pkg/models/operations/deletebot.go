package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteBotPathParams struct {
	BotID string `pathParam:"style=simple,explode=false,name=botId"`
}

type DeleteBotQueryParams struct {
	SkipResourceInUseCheck *bool `queryParam:"style=form,explode=true,name=skipResourceInUseCheck"`
}

type DeleteBotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteBotRequest struct {
	PathParams  DeleteBotPathParams
	QueryParams DeleteBotQueryParams
	Headers     DeleteBotHeaders
}

type DeleteBotResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	DeleteBotResponse             *shared.DeleteBotResponse
	InternalServerException       *interface{}
	PreconditionFailedException   *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
