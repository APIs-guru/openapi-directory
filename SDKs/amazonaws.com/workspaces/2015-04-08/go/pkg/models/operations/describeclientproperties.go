package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeClientPropertiesXAmzTargetEnum string

const (
	DescribeClientPropertiesXAmzTargetEnumWorkspacesServiceDescribeClientProperties DescribeClientPropertiesXAmzTargetEnum = "WorkspacesService.DescribeClientProperties"
)

type DescribeClientPropertiesHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeClientPropertiesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeClientPropertiesRequest struct {
	Headers DescribeClientPropertiesHeaders
	Request shared.DescribeClientPropertiesRequest `request:"mediaType=application/json"`
}

type DescribeClientPropertiesResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	DescribeClientPropertiesResult  *shared.DescribeClientPropertiesResult
	InvalidParameterValuesException *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
