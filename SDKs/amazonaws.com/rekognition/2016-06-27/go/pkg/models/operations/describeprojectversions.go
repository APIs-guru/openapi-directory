package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProjectVersionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeProjectVersionsXAmzTargetEnum string

const (
	DescribeProjectVersionsXAmzTargetEnumRekognitionServiceDescribeProjectVersions DescribeProjectVersionsXAmzTargetEnum = "RekognitionService.DescribeProjectVersions"
)

type DescribeProjectVersionsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProjectVersionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeProjectVersionsRequest struct {
	QueryParams DescribeProjectVersionsQueryParams
	Headers     DescribeProjectVersionsHeaders
	Request     shared.DescribeProjectVersionsRequest `request:"mediaType=application/json"`
}

type DescribeProjectVersionsResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	DescribeProjectVersionsResponse        *shared.DescribeProjectVersionsResponse
	InternalServerError                    *interface{}
	InvalidPaginationTokenException        *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
