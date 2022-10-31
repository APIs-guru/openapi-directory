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
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProjectVersionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
