package operations

import (
	"openapi/pkg/models/shared"
)

type GetBotPathParams struct {
	Name           string `pathParam:"style=simple,explode=false,name=name"`
	Versionoralias string `pathParam:"style=simple,explode=false,name=versionoralias"`
}

type GetBotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
