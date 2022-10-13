package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorkspacesQueryParams struct {
	Limit     *string `queryParam:"style=form,explode=true,name=Limit"`
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeWorkspacesXAmzTargetEnum string

const (
	DescribeWorkspacesXAmzTargetEnumWorkspacesServiceDescribeWorkspaces DescribeWorkspacesXAmzTargetEnum = "WorkspacesService.DescribeWorkspaces"
)

type DescribeWorkspacesHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeWorkspacesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeWorkspacesRequest struct {
	QueryParams DescribeWorkspacesQueryParams
	Headers     DescribeWorkspacesHeaders
	Request     shared.DescribeWorkspacesRequest `request:"mediaType=application/json"`
}

type DescribeWorkspacesResponse struct {
	ContentType                     string
	DescribeWorkspacesResult        *shared.DescribeWorkspacesResult
	InvalidParameterValuesException *interface{}
	ResourceUnavailableException    *interface{}
	StatusCode                      int64
}
