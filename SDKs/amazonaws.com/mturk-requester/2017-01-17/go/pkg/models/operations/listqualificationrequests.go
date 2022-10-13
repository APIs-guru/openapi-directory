package operations

import (
	"openapi/pkg/models/shared"
)

type ListQualificationRequestsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListQualificationRequestsXAmzTargetEnum string

const (
	ListQualificationRequestsXAmzTargetEnumMTurkRequesterServiceV20170117ListQualificationRequests ListQualificationRequestsXAmzTargetEnum = "MTurkRequesterServiceV20170117.ListQualificationRequests"
)

type ListQualificationRequestsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListQualificationRequestsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListQualificationRequestsRequest struct {
	QueryParams ListQualificationRequestsQueryParams
	Headers     ListQualificationRequestsHeaders
	Request     shared.ListQualificationRequestsRequest `request:"mediaType=application/json"`
}

type ListQualificationRequestsResponse struct {
	ContentType                       string
	ListQualificationRequestsResponse *shared.ListQualificationRequestsResponse
	RequestError                      *interface{}
	ServiceFault                      *interface{}
	StatusCode                        int64
}
