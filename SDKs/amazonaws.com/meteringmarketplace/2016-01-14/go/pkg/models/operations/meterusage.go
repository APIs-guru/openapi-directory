package operations

import (
	"openapi/pkg/models/shared"
)

type MeterUsageXAmzTargetEnum string

const (
	MeterUsageXAmzTargetEnumAwsmpMeteringServiceMeterUsage MeterUsageXAmzTargetEnum = "AWSMPMeteringService.MeterUsage"
)

type MeterUsageHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        MeterUsageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type MeterUsageRequest struct {
	Headers MeterUsageHeaders
	Request shared.MeterUsageRequest `request:"mediaType=application/json"`
}

type MeterUsageResponse struct {
	ContentType                      string
	CustomerNotEntitledException     *interface{}
	DuplicateRequestException        *interface{}
	InternalServiceErrorException    *interface{}
	InvalidEndpointRegionException   *interface{}
	InvalidProductCodeException      *interface{}
	InvalidTagException              *interface{}
	InvalidUsageAllocationsException *interface{}
	InvalidUsageDimensionException   *interface{}
	MeterUsageResult                 *shared.MeterUsageResult
	StatusCode                       int64
	ThrottlingException              *interface{}
	TimestampOutOfBoundsException    *interface{}
}
