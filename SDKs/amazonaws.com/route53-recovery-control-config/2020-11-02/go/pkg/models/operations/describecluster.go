package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeClusterPathParams struct {
	ClusterArn string `pathParam:"style=simple,explode=false,name=ClusterArn"`
}

type DescribeClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeClusterRequest struct {
	PathParams DescribeClusterPathParams
	Headers    DescribeClusterHeaders
}

type DescribeClusterResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	DescribeClusterResponse   *shared.DescribeClusterResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
