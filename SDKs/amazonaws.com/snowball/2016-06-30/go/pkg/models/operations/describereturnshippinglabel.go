package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeReturnShippingLabelXAmzTargetEnum string

const (
	DescribeReturnShippingLabelXAmzTargetEnumAwsieSnowballJobManagementServiceDescribeReturnShippingLabel DescribeReturnShippingLabelXAmzTargetEnum = "AWSIESnowballJobManagementService.DescribeReturnShippingLabel"
)

type DescribeReturnShippingLabelHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeReturnShippingLabelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeReturnShippingLabelRequest struct {
	Headers DescribeReturnShippingLabelHeaders
	Request shared.DescribeReturnShippingLabelRequest `request:"mediaType=application/json"`
}

type DescribeReturnShippingLabelResponse struct {
	ConflictException                 *interface{}
	ContentType                       string
	DescribeReturnShippingLabelResult *shared.DescribeReturnShippingLabelResult
	InvalidJobStateException          *interface{}
	InvalidResourceException          *interface{}
	StatusCode                        int64
}
