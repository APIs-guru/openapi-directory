package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum string

const (
	DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnumServiceQuotasV20190624DeleteServiceQuotaIncreaseRequestFromTemplate DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum = "ServiceQuotasV20190624.DeleteServiceQuotaIncreaseRequestFromTemplate"
)

type DeleteServiceQuotaIncreaseRequestFromTemplateHeaders struct {
	XAmzAlgorithm     *string                                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteServiceQuotaIncreaseRequestFromTemplateRequest struct {
	Headers DeleteServiceQuotaIncreaseRequestFromTemplateHeaders
	Request shared.DeleteServiceQuotaIncreaseRequestFromTemplateRequest `request:"mediaType=application/json"`
}

type DeleteServiceQuotaIncreaseRequestFromTemplateResponse struct {
	AwsServiceAccessNotEnabledException                   *interface{}
	AccessDeniedException                                 *interface{}
	ContentType                                           string
	DeleteServiceQuotaIncreaseRequestFromTemplateResponse map[string]interface{}
	DependencyAccessDeniedException                       *interface{}
	IllegalArgumentException                              *interface{}
	NoAvailableOrganizationException                      *interface{}
	NoSuchResourceException                               *interface{}
	ServiceException                                      *interface{}
	StatusCode                                            int64
	TemplatesNotAvailableInRegionException                *interface{}
	TooManyRequestsException                              *interface{}
}
