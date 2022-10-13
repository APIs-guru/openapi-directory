package operations

import (
	"openapi/pkg/models/shared"
)

type ListHiTsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListHiTsXAmzTargetEnum string

const (
	ListHiTsXAmzTargetEnumMTurkRequesterServiceV20170117ListHiTs ListHiTsXAmzTargetEnum = "MTurkRequesterServiceV20170117.ListHITs"
)

type ListHiTsHeaders struct {
	XAmzAlgorithm     *string                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListHiTsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListHiTsRequest struct {
	QueryParams ListHiTsQueryParams
	Headers     ListHiTsHeaders
	Request     shared.ListHiTsRequest `request:"mediaType=application/json"`
}

type ListHiTsResponse struct {
	ContentType      string
	ListHiTsResponse *shared.ListHiTsResponse
	RequestError     *interface{}
	ServiceFault     *interface{}
	StatusCode       int64
}
