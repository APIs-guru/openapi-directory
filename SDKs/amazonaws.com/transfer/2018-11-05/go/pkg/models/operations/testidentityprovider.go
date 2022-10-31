package operations

import (
	"openapi/pkg/models/shared"
)

type TestIdentityProviderXAmzTargetEnum string

const (
	TestIdentityProviderXAmzTargetEnumTransferServiceTestIdentityProvider TestIdentityProviderXAmzTargetEnum = "TransferService.TestIdentityProvider"
)

type TestIdentityProviderHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        TestIdentityProviderXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
