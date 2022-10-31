package operations

import (
	"openapi/pkg/models/shared"
)

type GetSlotTypePathParams struct {
	Name    string `pathParam:"style=simple,explode=false,name=name"`
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type GetSlotTypeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
