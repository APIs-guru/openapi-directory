package operations

import (
	"openapi/pkg/models/shared"
)

type ResolveCustomerXAmzTargetEnum string

const (
	ResolveCustomerXAmzTargetEnumAwsmpMeteringServiceResolveCustomer ResolveCustomerXAmzTargetEnum = "AWSMPMeteringService.ResolveCustomer"
)

type ResolveCustomerHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ResolveCustomerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ResolveCustomerRequest struct {
	Headers ResolveCustomerHeaders
	Request shared.ResolveCustomerRequest `request:"mediaType=application/json"`
}

type ResolveCustomerResponse struct {
	ContentType                   string
	DisabledAPIException          *interface{}
	ExpiredTokenException         *interface{}
	InternalServiceErrorException *interface{}
	InvalidTokenException         *interface{}
	ResolveCustomerResult         *shared.ResolveCustomerResult
	StatusCode                    int64
	ThrottlingException           *interface{}
}
