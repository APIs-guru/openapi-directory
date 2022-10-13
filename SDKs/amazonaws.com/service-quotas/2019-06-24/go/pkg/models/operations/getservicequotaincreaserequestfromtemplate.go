package operations

import (
	"openapi/pkg/models/shared"
)

type GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum string

const (
	GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnumServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplate GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum = "ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate"
)

type GetServiceQuotaIncreaseRequestFromTemplateHeaders struct {
	XAmzAlgorithm     *string                                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetServiceQuotaIncreaseRequestFromTemplateRequest struct {
	Headers GetServiceQuotaIncreaseRequestFromTemplateHeaders
	Request shared.GetServiceQuotaIncreaseRequestFromTemplateRequest `request:"mediaType=application/json"`
}

type GetServiceQuotaIncreaseRequestFromTemplateResponse struct {
	AwsServiceAccessNotEnabledException                *interface{}
	AccessDeniedException                              *interface{}
	ContentType                                        string
	DependencyAccessDeniedException                    *interface{}
	GetServiceQuotaIncreaseRequestFromTemplateResponse *shared.GetServiceQuotaIncreaseRequestFromTemplateResponse
	IllegalArgumentException                           *interface{}
	NoAvailableOrganizationException                   *interface{}
	NoSuchResourceException                            *interface{}
	ServiceException                                   *interface{}
	StatusCode                                         int64
	TemplatesNotAvailableInRegionException             *interface{}
	TooManyRequestsException                           *interface{}
}
