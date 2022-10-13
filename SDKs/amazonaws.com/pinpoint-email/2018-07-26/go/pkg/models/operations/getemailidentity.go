package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmailIdentityPathParams struct {
	EmailIdentity string `pathParam:"style=simple,explode=false,name=EmailIdentity"`
}

type GetEmailIdentityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEmailIdentityRequest struct {
	PathParams GetEmailIdentityPathParams
	Headers    GetEmailIdentityHeaders
}

type GetEmailIdentityResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetEmailIdentityResponse *shared.GetEmailIdentityResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
