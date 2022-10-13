package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAutoMlJobXAmzTargetEnum string

const (
	DescribeAutoMlJobXAmzTargetEnumSageMakerDescribeAutoMlJob DescribeAutoMlJobXAmzTargetEnum = "SageMaker.DescribeAutoMLJob"
)

type DescribeAutoMlJobHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAutoMlJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAutoMlJobRequest struct {
	Headers DescribeAutoMlJobHeaders
	Request shared.DescribeAutoMlJobRequest `request:"mediaType=application/json"`
}

type DescribeAutoMlJobResponse struct {
	ContentType               string
	DescribeAutoMlJobResponse *shared.DescribeAutoMlJobResponse
	ResourceNotFound          *interface{}
	StatusCode                int64
}
