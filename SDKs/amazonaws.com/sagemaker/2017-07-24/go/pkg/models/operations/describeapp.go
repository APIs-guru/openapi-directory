package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAppXAmzTargetEnum string

const (
	DescribeAppXAmzTargetEnumSageMakerDescribeApp DescribeAppXAmzTargetEnum = "SageMaker.DescribeApp"
)

type DescribeAppHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAppXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeAppRequest struct {
	Headers DescribeAppHeaders
	Request shared.DescribeAppRequest `request:"mediaType=application/json"`
}

type DescribeAppResponse struct {
	ContentType         string
	DescribeAppResponse *shared.DescribeAppResponse
	ResourceNotFound    *interface{}
	StatusCode          int64
}
