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
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeWorkspaceBundlesXAmzTargetEnum `header:"name=X-Amz-Target"`
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
