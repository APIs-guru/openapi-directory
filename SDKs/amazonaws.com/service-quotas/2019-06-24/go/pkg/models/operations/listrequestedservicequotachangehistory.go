package operations

import (
	"openapi/pkg/models/shared"
)

type ListRequestedServiceQuotaChangeHistoryQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum string

const (
	ListRequestedServiceQuotaChangeHistoryXAmzTargetEnumServiceQuotasV20190624ListRequestedServiceQuotaChangeHistory ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum = "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory"
)

type ListRequestedServiceQuotaChangeHistoryHeaders struct {
	XAmzAlgorithm     *string                                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListRequestedServiceQuotaChangeHistoryRequest struct {
	QueryParams ListRequestedServiceQuotaChangeHistoryQueryParams
	Headers     ListRequestedServiceQuotaChangeHistoryHeaders
	Request     shared.ListRequestedServiceQuotaChangeHistoryRequest `request:"mediaType=application/json"`
}

type ListRequestedServiceQuotaChangeHistoryResponse struct {
	AccessDeniedException                          *interface{}
	ContentType                                    string
	IllegalArgumentException                       *interface{}
	InvalidPaginationTokenException                *interface{}
	ListRequestedServiceQuotaChangeHistoryResponse *shared.ListRequestedServiceQuotaChangeHistoryResponse
	NoSuchResourceException                        *interface{}
	ServiceException                               *interface{}
	StatusCode                                     int64
	TooManyRequestsException                       *interface{}
}
