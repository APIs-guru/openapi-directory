package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEmailIdentityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateEmailIdentityRequestBody struct {
	EmailIdentity string       `json:"EmailIdentity"`
	Tags          []shared.Tag `json:"Tags"`
}

type CreateEmailIdentityRequest struct {
	Headers CreateEmailIdentityHeaders
	Request CreateEmailIdentityRequestBody `request:"mediaType=application/json"`
}

type CreateEmailIdentityResponse struct {
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	CreateEmailIdentityResponse     *shared.CreateEmailIdentityResponse
	LimitExceededException          *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
