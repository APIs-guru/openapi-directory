package operations

import (
	"openapi/pkg/models/shared"
)

type ListHiTsForQualificationTypeQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListHiTsForQualificationTypeXAmzTargetEnum string

const (
	ListHiTsForQualificationTypeXAmzTargetEnumMTurkRequesterServiceV20170117ListHiTsForQualificationType ListHiTsForQualificationTypeXAmzTargetEnum = "MTurkRequesterServiceV20170117.ListHITsForQualificationType"
)

type ListHiTsForQualificationTypeHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListHiTsForQualificationTypeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListHiTsForQualificationTypeRequest struct {
	QueryParams ListHiTsForQualificationTypeQueryParams
	Headers     ListHiTsForQualificationTypeHeaders
	Request     shared.ListHiTsForQualificationTypeRequest `request:"mediaType=application/json"`
}

type ListHiTsForQualificationTypeResponse struct {
	ContentType                          string
	ListHiTsForQualificationTypeResponse *shared.ListHiTsForQualificationTypeResponse
	RequestError                         *interface{}
	ServiceFault                         *interface{}
	StatusCode                           int64
}
