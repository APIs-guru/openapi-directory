package operations

import (
	"openapi/pkg/models/shared"
)

type ListRequestedServiceQuotaChangeHistoryByQuotaQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListRequestedServiceQuotaChangeHistoryByQuotaXAmzTargetEnum string

const (
	ListRequestedServiceQuotaChangeHistoryByQuotaXAmzTargetEnumServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuota ListRequestedServiceQuotaChangeHistoryByQuotaXAmzTargetEnum = "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota"
)

type ListRequestedServiceQuotaChangeHistoryByQuotaHeaders struct {
	XAmzAlgorithm     *string                                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRequestedServiceQuotaChangeHistoryByQuotaXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListRequestedServiceQuotaChangeHistoryByQuotaRequest struct {
	QueryParams ListRequestedServiceQuotaChangeHistoryByQuotaQueryParams
	Headers     ListRequestedServiceQuotaChangeHistoryByQuotaHeaders
	Request     shared.ListRequestedServiceQuotaChangeHistoryByQuotaRequest `request:"mediaType=application/json"`
}

type ListRequestedServiceQuotaChangeHistoryByQuotaResponse struct {
	AccessDeniedException                                 *interface{}
	ContentType                                           string
	IllegalArgumentException                              *interface{}
	InvalidPaginationTokenException                       *interface{}
	ListRequestedServiceQuotaChangeHistoryByQuotaResponse *shared.ListRequestedServiceQuotaChangeHistoryByQuotaResponse
	NoSuchResourceException                               *interface{}
	ServiceException                                      *interface{}
	StatusCode                                            int64
	TooManyRequestsException                              *interface{}
}
