package operations

import (
	"openapi/pkg/models/shared"
)

type GetBuiltinIntentPathParams struct {
	Signature string `pathParam:"style=simple,explode=false,name=signature"`
}

type GetBuiltinIntentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetBuiltinIntentRequest struct {
	PathParams GetBuiltinIntentPathParams
	Headers    GetBuiltinIntentHeaders
}

type GetBuiltinIntentResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetBuiltinIntentResponse *shared.GetBuiltinIntentResponse
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
}
