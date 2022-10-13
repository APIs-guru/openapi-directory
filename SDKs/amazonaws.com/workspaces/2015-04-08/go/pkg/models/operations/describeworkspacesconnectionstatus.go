package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorkspacesConnectionStatusXAmzTargetEnum string

const (
	DescribeWorkspacesConnectionStatusXAmzTargetEnumWorkspacesServiceDescribeWorkspacesConnectionStatus DescribeWorkspacesConnectionStatusXAmzTargetEnum = "WorkspacesService.DescribeWorkspacesConnectionStatus"
)

type DescribeWorkspacesConnectionStatusHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeWorkspacesConnectionStatusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeWorkspacesConnectionStatusRequest struct {
	Headers DescribeWorkspacesConnectionStatusHeaders
	Request shared.DescribeWorkspacesConnectionStatusRequest `request:"mediaType=application/json"`
}

type DescribeWorkspacesConnectionStatusResponse struct {
	ContentType                              string
	DescribeWorkspacesConnectionStatusResult *shared.DescribeWorkspacesConnectionStatusResult
	InvalidParameterValuesException          *interface{}
	StatusCode                               int64
}
