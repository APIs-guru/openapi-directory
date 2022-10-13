package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeConnectionAliasPermissionsXAmzTargetEnum string

const (
	DescribeConnectionAliasPermissionsXAmzTargetEnumWorkspacesServiceDescribeConnectionAliasPermissions DescribeConnectionAliasPermissionsXAmzTargetEnum = "WorkspacesService.DescribeConnectionAliasPermissions"
)

type DescribeConnectionAliasPermissionsHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeConnectionAliasPermissionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeConnectionAliasPermissionsRequest struct {
	Headers DescribeConnectionAliasPermissionsHeaders
	Request shared.DescribeConnectionAliasPermissionsRequest `request:"mediaType=application/json"`
}

type DescribeConnectionAliasPermissionsResponse struct {
	AccessDeniedException                    *interface{}
	ContentType                              string
	DescribeConnectionAliasPermissionsResult *shared.DescribeConnectionAliasPermissionsResult
	InvalidParameterValuesException          *interface{}
	OperationNotSupportedException           *interface{}
	ResourceNotFoundException                *interface{}
	StatusCode                               int64
}
