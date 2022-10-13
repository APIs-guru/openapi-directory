package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAddressXAmzTargetEnum string

const (
	DescribeAddressXAmzTargetEnumAwsieSnowballJobManagementServiceDescribeAddress DescribeAddressXAmzTargetEnum = "AWSIESnowballJobManagementService.DescribeAddress"
)

type DescribeAddressHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAddressXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAddressRequest struct {
	Headers DescribeAddressHeaders
	Request shared.DescribeAddressRequest `request:"mediaType=application/json"`
}

type DescribeAddressResponse struct {
	ContentType              string
	DescribeAddressResult    *shared.DescribeAddressResult
	InvalidResourceException *interface{}
	StatusCode               int64
}
