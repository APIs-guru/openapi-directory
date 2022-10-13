package operations

import (
	"openapi/pkg/models/shared"
)

type GetSuppressedDestinationPathParams struct {
	EmailAddress string `pathParam:"style=simple,explode=false,name=EmailAddress"`
}

type GetSuppressedDestinationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSuppressedDestinationRequest struct {
	PathParams GetSuppressedDestinationPathParams
	Headers    GetSuppressedDestinationHeaders
}

type GetSuppressedDestinationResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	GetSuppressedDestinationResponse *shared.GetSuppressedDestinationResponse
	NotFoundException                *interface{}
	StatusCode                       int64
	TooManyRequestsException         *interface{}
}
