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

type CreateEmailIdentityRequestBodyDkimSigningAttributes struct {
	DomainSigningPrivateKey *string `json:"DomainSigningPrivateKey,omitempty"`
	DomainSigningSelector   *string `json:"DomainSigningSelector,omitempty"`
}

type CreateEmailIdentityRequestBody struct {
	ConfigurationSetName  *string                                              `json:"ConfigurationSetName,omitempty"`
	DkimSigningAttributes *CreateEmailIdentityRequestBodyDkimSigningAttributes `json:"DkimSigningAttributes,omitempty"`
	EmailIdentity         string                                               `json:"EmailIdentity"`
	Tags                  []shared.Tag                                         `json:"Tags,omitempty"`
}

type CreateEmailIdentityRequest struct {
	Headers CreateEmailIdentityHeaders
	Request CreateEmailIdentityRequestBody `request:"mediaType=application/json"`
}

type CreateEmailIdentityResponse struct {
	AlreadyExistsException          *interface{}
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	CreateEmailIdentityResponse     *shared.CreateEmailIdentityResponse
	LimitExceededException          *interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
