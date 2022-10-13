package operations

import (
	"openapi/pkg/models/shared"
)

type TestIdentityProviderXAmzTargetEnum string

const (
	TestIdentityProviderXAmzTargetEnumTransferServiceTestIdentityProvider TestIdentityProviderXAmzTargetEnum = "TransferService.TestIdentityProvider"
)

type TestIdentityProviderHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TestIdentityProviderXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TestIdentityProviderRequest struct {
	Headers TestIdentityProviderHeaders
	Request shared.TestIdentityProviderRequest `request:"mediaType=application/json"`
}

type TestIdentityProviderResponse struct {
	ContentType                  string
	InternalServiceError         *interface{}
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TestIdentityProviderResponse *shared.TestIdentityProviderResponse
}
