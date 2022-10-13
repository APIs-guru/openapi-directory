package operations

import (
	"openapi/pkg/models/shared"
)

type BatchMeterUsageXAmzTargetEnum string

const (
	BatchMeterUsageXAmzTargetEnumAwsmpMeteringServiceBatchMeterUsage BatchMeterUsageXAmzTargetEnum = "AWSMPMeteringService.BatchMeterUsage"
)

type BatchMeterUsageHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        BatchMeterUsageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type BatchMeterUsageRequest struct {
	Headers BatchMeterUsageHeaders
	Request shared.BatchMeterUsageRequest `request:"mediaType=application/json"`
}

type BatchMeterUsageResponse struct {
	BatchMeterUsageResult              *shared.BatchMeterUsageResult
	ContentType                        string
	DisabledAPIException               *interface{}
	InternalServiceErrorException      *interface{}
	InvalidCustomerIdentifierException *interface{}
	InvalidProductCodeException        *interface{}
	InvalidTagException                *interface{}
	InvalidUsageAllocationsException   *interface{}
	InvalidUsageDimensionException     *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
	TimestampOutOfBoundsException      *interface{}
}
