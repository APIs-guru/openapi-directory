package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCasesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type DescribeCasesXAmzTargetEnum string

const (
	DescribeCasesXAmzTargetEnumAwsSupport20130415DescribeCases DescribeCasesXAmzTargetEnum = "AWSSupport_20130415.DescribeCases"
)

type DescribeCasesHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeCasesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeCasesRequest struct {
	QueryParams DescribeCasesQueryParams
	Headers     DescribeCasesHeaders
	Request     shared.DescribeCasesRequest `request:"mediaType=application/json"`
}

type DescribeCasesResponse struct {
	CaseIDNotFound        *interface{}
	ContentType           string
	DescribeCasesResponse *shared.DescribeCasesResponse
	InternalServerError   *interface{}
	StatusCode            int64
}
