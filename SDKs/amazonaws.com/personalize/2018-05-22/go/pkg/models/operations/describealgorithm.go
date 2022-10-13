package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAlgorithmXAmzTargetEnum string

const (
	DescribeAlgorithmXAmzTargetEnumAmazonPersonalizeDescribeAlgorithm DescribeAlgorithmXAmzTargetEnum = "AmazonPersonalize.DescribeAlgorithm"
)

type DescribeAlgorithmHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAlgorithmXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAlgorithmRequest struct {
	Headers DescribeAlgorithmHeaders
	Request shared.DescribeAlgorithmRequest `request:"mediaType=application/json"`
}

type DescribeAlgorithmResponse struct {
	ContentType               string
	DescribeAlgorithmResponse *shared.DescribeAlgorithmResponse
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
