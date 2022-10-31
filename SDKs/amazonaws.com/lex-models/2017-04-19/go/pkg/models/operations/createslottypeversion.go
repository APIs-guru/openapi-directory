package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSlotTypeVersionPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type CreateSlotTypeVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateSlotTypeVersionRequestBody struct {
	Checksum *string `json:"checksum,omitempty"`
}

type CreateSlotTypeVersionRequest struct {
	PathParams CreateSlotTypeVersionPathParams
	Headers    CreateSlotTypeVersionHeaders
	Request    CreateSlotTypeVersionRequestBody `request:"mediaType=application/json"`
}

type CreateSlotTypeVersionResponse struct {
	BadRequestException           *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateSlotTypeVersionResponse *shared.CreateSlotTypeVersionResponse
	InternalFailureException      *interface{}
	LimitExceededException        *interface{}
	NotFoundException             *interface{}
	PreconditionFailedException   *interface{}
	StatusCode                    int64
}
