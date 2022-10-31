package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSchemaXAmzTargetEnum string

const (
	DescribeSchemaXAmzTargetEnumAmazonPersonalizeDescribeSchema DescribeSchemaXAmzTargetEnum = "AmazonPersonalize.DescribeSchema"
)

type DescribeSchemaHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSchemaXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeSchemaRequest struct {
	Headers DescribeSchemaHeaders
	Request shared.DescribeSchemaRequest `request:"mediaType=application/json"`
}

type DescribeSchemaResponse struct {
	ContentType               string
	DescribeSchemaResponse    *shared.DescribeSchemaResponse
	InvalidInputException     *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
