package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorkspaceDirectoriesQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeWorkspaceDirectoriesXAmzTargetEnum string

const (
	DescribeWorkspaceDirectoriesXAmzTargetEnumWorkspacesServiceDescribeWorkspaceDirectories DescribeWorkspaceDirectoriesXAmzTargetEnum = "WorkspacesService.DescribeWorkspaceDirectories"
)

type DescribeWorkspaceDirectoriesHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeWorkspaceDirectoriesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeWorkspaceDirectoriesRequest struct {
	QueryParams DescribeWorkspaceDirectoriesQueryParams
	Headers     DescribeWorkspaceDirectoriesHeaders
	Request     shared.DescribeWorkspaceDirectoriesRequest `request:"mediaType=application/json"`
}

type DescribeWorkspaceDirectoriesResponse struct {
	ContentType                        string
	DescribeWorkspaceDirectoriesResult *shared.DescribeWorkspaceDirectoriesResult
	InvalidParameterValuesException    *interface{}
	StatusCode                         int64
}
