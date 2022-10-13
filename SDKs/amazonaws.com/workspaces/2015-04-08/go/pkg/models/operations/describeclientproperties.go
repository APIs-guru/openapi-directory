package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeClientPropertiesXAmzTargetEnum string

const (
	DescribeClientPropertiesXAmzTargetEnumWorkspacesServiceDescribeClientProperties DescribeClientPropertiesXAmzTargetEnum = "WorkspacesService.DescribeClientProperties"
)

type DescribeClientPropertiesHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeClientPropertiesXAmzTargetEnum `header:"name=X-Amz-Target"`
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
