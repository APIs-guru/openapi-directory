package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterUsageXAmzTargetEnum string

const (
	RegisterUsageXAmzTargetEnumAwsmpMeteringServiceRegisterUsage RegisterUsageXAmzTargetEnum = "AWSMPMeteringService.RegisterUsage"
)

type RegisterUsageHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterUsageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RegisterUsageRequest struct {
	Headers RegisterUsageHeaders
	Request shared.RegisterUsageRequest `request:"mediaType=application/json"`
}

type RegisterUsageResponse struct {
	ContentType                      string
	CustomerNotEntitledException     *interface{}
	DisabledAPIException             *interface{}
	InternalServiceErrorException    *interface{}
	InvalidProductCodeException      *interface{}
	InvalidPublicKeyVersionException *interface{}
	InvalidRegionException           *interface{}
	PlatformNotSupportedException    *interface{}
	RegisterUsageResult              *shared.RegisterUsageResult
	StatusCode                       int64
	ThrottlingException              *interface{}
}
