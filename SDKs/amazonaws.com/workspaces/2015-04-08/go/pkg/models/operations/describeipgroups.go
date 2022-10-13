package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeIPGroupsXAmzTargetEnum string

const (
	DescribeIPGroupsXAmzTargetEnumWorkspacesServiceDescribeIPGroups DescribeIPGroupsXAmzTargetEnum = "WorkspacesService.DescribeIpGroups"
)

type DescribeIPGroupsHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeIPGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeIPGroupsRequest struct {
	Headers DescribeIPGroupsHeaders
	Request shared.DescribeIPGroupsRequest `request:"mediaType=application/json"`
}

type DescribeIPGroupsResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	DescribeIPGroupsResult          *shared.DescribeIPGroupsResult
	InvalidParameterValuesException *interface{}
	StatusCode                      int64
}
