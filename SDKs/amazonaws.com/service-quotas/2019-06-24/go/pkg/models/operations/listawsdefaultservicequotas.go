package operations

import (
	"openapi/pkg/models/shared"
)

type ListAwsDefaultServiceQuotasQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAwsDefaultServiceQuotasXAmzTargetEnum string

const (
	ListAwsDefaultServiceQuotasXAmzTargetEnumServiceQuotasV20190624ListAwsDefaultServiceQuotas ListAwsDefaultServiceQuotasXAmzTargetEnum = "ServiceQuotasV20190624.ListAWSDefaultServiceQuotas"
)

type ListAwsDefaultServiceQuotasHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAwsDefaultServiceQuotasXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAwsDefaultServiceQuotasRequest struct {
	QueryParams ListAwsDefaultServiceQuotasQueryParams
	Headers     ListAwsDefaultServiceQuotasHeaders
	Request     shared.ListAwsDefaultServiceQuotasRequest `request:"mediaType=application/json"`
}

type ListAwsDefaultServiceQuotasResponse struct {
	AccessDeniedException               *interface{}
	ContentType                         string
	IllegalArgumentException            *interface{}
	InvalidPaginationTokenException     *interface{}
	ListAwsDefaultServiceQuotasResponse *shared.ListAwsDefaultServiceQuotasResponse
	NoSuchResourceException             *interface{}
	ServiceException                    *interface{}
	StatusCode                          int64
	TooManyRequestsException            *interface{}
}
