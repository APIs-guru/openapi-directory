package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorkforceXAmzTargetEnum string

const (
	DescribeWorkforceXAmzTargetEnumSageMakerDescribeWorkforce DescribeWorkforceXAmzTargetEnum = "SageMaker.DescribeWorkforce"
)

type DescribeWorkforceHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeWorkforceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeWorkforceRequest struct {
	Headers DescribeWorkforceHeaders
	Request shared.DescribeWorkforceRequest `request:"mediaType=application/json"`
}

type DescribeWorkforceResponse struct {
	ContentType               string
	DescribeWorkforceResponse *shared.DescribeWorkforceResponse
	StatusCode                int64
}
