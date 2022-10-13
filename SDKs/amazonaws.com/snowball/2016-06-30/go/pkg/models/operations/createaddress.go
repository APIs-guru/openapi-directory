package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAddressXAmzTargetEnum string

const (
	CreateAddressXAmzTargetEnumAwsieSnowballJobManagementServiceCreateAddress CreateAddressXAmzTargetEnum = "AWSIESnowballJobManagementService.CreateAddress"
)

type CreateAddressHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAddressXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateAddressRequest struct {
	Headers CreateAddressHeaders
	Request shared.CreateAddressRequest `request:"mediaType=application/json"`
}

type CreateAddressResponse struct {
	ContentType                 string
	CreateAddressResult         *shared.CreateAddressResult
	InvalidAddressException     *interface{}
	StatusCode                  int64
	UnsupportedAddressException *interface{}
}
