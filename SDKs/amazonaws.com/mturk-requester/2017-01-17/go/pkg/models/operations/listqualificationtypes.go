package operations

import (
	"openapi/pkg/models/shared"
)

type ListQualificationTypesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListQualificationTypesXAmzTargetEnum string

const (
	ListQualificationTypesXAmzTargetEnumMTurkRequesterServiceV20170117ListQualificationTypes ListQualificationTypesXAmzTargetEnum = "MTurkRequesterServiceV20170117.ListQualificationTypes"
)

type ListQualificationTypesHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListQualificationTypesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListQualificationTypesRequest struct {
	QueryParams ListQualificationTypesQueryParams
	Headers     ListQualificationTypesHeaders
	Request     shared.ListQualificationTypesRequest `request:"mediaType=application/json"`
}

type ListQualificationTypesResponse struct {
	ContentType                    string
	ListQualificationTypesResponse *shared.ListQualificationTypesResponse
	RequestError                   *interface{}
	ServiceFault                   *interface{}
	StatusCode                     int64
}
