package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeContextXAmzTargetEnum string

const (
	DescribeContextXAmzTargetEnumSageMakerDescribeContext DescribeContextXAmzTargetEnum = "SageMaker.DescribeContext"
)

type DescribeContextHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeContextXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeContextRequest struct {
	Headers DescribeContextHeaders
	Request shared.DescribeContextRequest `request:"mediaType=application/json"`
}

type DescribeContextResponse struct {
	ContentType             string
	DescribeContextResponse *shared.DescribeContextResponse
	ResourceNotFound        *interface{}
	StatusCode              int64
}
