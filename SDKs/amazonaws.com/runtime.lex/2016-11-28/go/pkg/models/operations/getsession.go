package operations

import (
	"openapi/pkg/models/shared"
)

type GetSessionPathParams struct {
	BotAlias string `pathParam:"style=simple,explode=false,name=botAlias"`
	BotName  string `pathParam:"style=simple,explode=false,name=botName"`
	UserID   string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetSessionQueryParams struct {
	CheckpointLabelFilter *string `queryParam:"style=form,explode=true,name=checkpointLabelFilter"`
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
	PathParams  GetSessionPathParams
	QueryParams GetSessionQueryParams
	Headers     GetSessionHeaders
}

type GetSessionResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetSessionResponse       *shared.GetSessionResponse
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
}
