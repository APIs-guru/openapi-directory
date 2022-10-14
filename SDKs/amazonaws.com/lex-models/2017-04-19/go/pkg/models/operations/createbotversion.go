package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBotVersionPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CreateBotVersionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateBotVersionRequestBody struct {
	Checksum *string `json:"checksum,omitempty"`
}

type CreateBotVersionRequest struct {
	PathParams CreateBotVersionPathParams
	Headers    CreateBotVersionHeaders
	Request    CreateBotVersionRequestBody `request:"mediaType=application/json"`
}

type CreateBotVersionResponse struct {
	BadRequestException         *interface{}
	ConflictException           *interface{}
	ContentType                 string
	CreateBotVersionResponse    *shared.CreateBotVersionResponse
	InternalFailureException    *interface{}
	LimitExceededException      *interface{}
	NotFoundException           *interface{}
	PreconditionFailedException *interface{}
	StatusCode                  int64
}
