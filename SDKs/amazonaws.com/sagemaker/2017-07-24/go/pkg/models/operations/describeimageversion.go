package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeImageVersionXAmzTargetEnum string

const (
	DescribeImageVersionXAmzTargetEnumSageMakerDescribeImageVersion DescribeImageVersionXAmzTargetEnum = "SageMaker.DescribeImageVersion"
)

type DescribeImageVersionHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeImageVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeImageVersionRequest struct {
	Headers DescribeImageVersionHeaders
	Request shared.DescribeImageVersionRequest `request:"mediaType=application/json"`
}

type DescribeImageVersionResponse struct {
	ContentType                  string
	DescribeImageVersionResponse *shared.DescribeImageVersionResponse
	ResourceNotFound             *interface{}
	StatusCode                   int64
}
