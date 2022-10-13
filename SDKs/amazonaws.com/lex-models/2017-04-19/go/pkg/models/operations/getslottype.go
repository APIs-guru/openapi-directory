package operations

import (
	"openapi/pkg/models/shared"
)

type GetSlotTypePathParams struct {
	Name    string `pathParam:"style=simple,explode=false,name=name"`
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type GetSlotTypeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSlotTypeRequest struct {
	PathParams GetSlotTypePathParams
	Headers    GetSlotTypeHeaders
}

type GetSlotTypeResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetSlotTypeResponse      *shared.GetSlotTypeResponse
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
}
