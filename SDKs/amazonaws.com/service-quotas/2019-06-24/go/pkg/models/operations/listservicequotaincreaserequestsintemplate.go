package operations

import (
	"openapi/pkg/models/shared"
)

type ListServiceQuotaIncreaseRequestsInTemplateQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum string

const (
	ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnumServiceQuotasV20190624ListServiceQuotaIncreaseRequestsInTemplate ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum = "ServiceQuotasV20190624.ListServiceQuotaIncreaseRequestsInTemplate"
)

type ListServiceQuotaIncreaseRequestsInTemplateHeaders struct {
	XAmzAlgorithm     *string                                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListServiceQuotaIncreaseRequestsInTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListServiceQuotaIncreaseRequestsInTemplateRequest struct {
	QueryParams ListServiceQuotaIncreaseRequestsInTemplateQueryParams
	Headers     ListServiceQuotaIncreaseRequestsInTemplateHeaders
	Request     shared.ListServiceQuotaIncreaseRequestsInTemplateRequest `request:"mediaType=application/json"`
}

type ListServiceQuotaIncreaseRequestsInTemplateResponse struct {
	AwsServiceAccessNotEnabledException                *interface{}
	AccessDeniedException                              *interface{}
	ContentType                                        string
	DependencyAccessDeniedException                    *interface{}
	IllegalArgumentException                           *interface{}
	ListServiceQuotaIncreaseRequestsInTemplateResponse *shared.ListServiceQuotaIncreaseRequestsInTemplateResponse
	NoAvailableOrganizationException                   *interface{}
	ServiceException                                   *interface{}
	StatusCode                                         int64
	TemplatesNotAvailableInRegionException             *interface{}
	TooManyRequestsException                           *interface{}
}
