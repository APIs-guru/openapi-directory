package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDatasetGroupXAmzTargetEnum string

const (
	DescribeDatasetGroupXAmzTargetEnumAmazonPersonalizeDescribeDatasetGroup DescribeDatasetGroupXAmzTargetEnum = "AmazonPersonalize.DescribeDatasetGroup"
)

type DescribeDatasetGroupHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDatasetGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeDatasetGroupRequest struct {
	Headers DescribeDatasetGroupHeaders
	Request shared.DescribeDatasetGroupRequest `request:"mediaType=application/json"`
}

type DescribeDatasetGroupResponse struct {
	ContentType                  string
	DescribeDatasetGroupResponse *shared.DescribeDatasetGroupResponse
	InvalidInputException        *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
