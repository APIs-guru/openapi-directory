package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorkspaceBundlesQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeWorkspaceBundlesXAmzTargetEnum string

const (
	DescribeWorkspaceBundlesXAmzTargetEnumWorkspacesServiceDescribeWorkspaceBundles DescribeWorkspaceBundlesXAmzTargetEnum = "WorkspacesService.DescribeWorkspaceBundles"
)

type DescribeWorkspaceBundlesHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeWorkspaceBundlesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeWorkspaceBundlesRequest struct {
	QueryParams DescribeWorkspaceBundlesQueryParams
	Headers     DescribeWorkspaceBundlesHeaders
	Request     shared.DescribeWorkspaceBundlesRequest `request:"mediaType=application/json"`
}

type DescribeWorkspaceBundlesResponse struct {
	ContentType                     string
	DescribeWorkspaceBundlesResult  *shared.DescribeWorkspaceBundlesResult
	InvalidParameterValuesException *interface{}
	StatusCode                      int64
}
