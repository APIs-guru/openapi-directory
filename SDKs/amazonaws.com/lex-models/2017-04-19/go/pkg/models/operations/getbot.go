package operations

import (
	"openapi/pkg/models/shared"
)

type GetBotPathParams struct {
	Name           string `pathParam:"style=simple,explode=false,name=name"`
	Versionoralias string `pathParam:"style=simple,explode=false,name=versionoralias"`
}

type GetBotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBotRequest struct {
	PathParams GetBotPathParams
	Headers    GetBotHeaders
}

type GetBotResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetBotResponse           *shared.GetBotResponse
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
}
