package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeEngineVersionsXAmzTargetEnum string

const (
	DescribeEngineVersionsXAmzTargetEnumAmazonMemoryDbDescribeEngineVersions DescribeEngineVersionsXAmzTargetEnum = "AmazonMemoryDB.DescribeEngineVersions"
)

type DescribeEngineVersionsHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeEngineVersionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeEngineVersionsRequest struct {
	Headers DescribeEngineVersionsHeaders
	Request shared.DescribeEngineVersionsRequest `request:"mediaType=application/json"`
}

type DescribeEngineVersionsResponse struct {
	ContentType                          string
	DescribeEngineVersionsResponse       *shared.DescribeEngineVersionsResponse
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	ServiceLinkedRoleNotFoundFault       *interface{}
	StatusCode                           int64
}
