package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProjectsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeProjectsXAmzTargetEnum string

const (
	DescribeProjectsXAmzTargetEnumRekognitionServiceDescribeProjects DescribeProjectsXAmzTargetEnum = "RekognitionService.DescribeProjects"
)

type DescribeProjectsHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProjectsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeProjectsRequest struct {
	QueryParams DescribeProjectsQueryParams
	Headers     DescribeProjectsHeaders
	Request     shared.DescribeProjectsRequest `request:"mediaType=application/json"`
}

type DescribeProjectsResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	DescribeProjectsResponse               *shared.DescribeProjectsResponse
	InternalServerError                    *interface{}
	InvalidPaginationTokenException        *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
