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
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeWorkspacesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
