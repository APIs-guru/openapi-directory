package operations

import (
	"openapi/pkg/models/shared"
)

type PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum string

const (
	PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnumServiceQuotasV20190624PutServiceQuotaIncreaseRequestIntoTemplate PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum = "ServiceQuotasV20190624.PutServiceQuotaIncreaseRequestIntoTemplate"
)

type PutServiceQuotaIncreaseRequestIntoTemplateHeaders struct {
	XAmzAlgorithm     *string                                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutServiceQuotaIncreaseRequestIntoTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutServiceQuotaIncreaseRequestIntoTemplateRequest struct {
	Headers PutServiceQuotaIncreaseRequestIntoTemplateHeaders
	Request shared.PutServiceQuotaIncreaseRequestIntoTemplateRequest `request:"mediaType=application/json"`
}

type PutServiceQuotaIncreaseRequestIntoTemplateResponse struct {
	AwsServiceAccessNotEnabledException                *interface{}
	AccessDeniedException                              *interface{}
	ContentType                                        string
	DependencyAccessDeniedException                    *interface{}
	IllegalArgumentException                           *interface{}
	NoAvailableOrganizationException                   *interface{}
	NoSuchResourceException                            *interface{}
	PutServiceQuotaIncreaseRequestIntoTemplateResponse *shared.PutServiceQuotaIncreaseRequestIntoTemplateResponse
	QuotaExceededException                             *interface{}
	ServiceException                                   *interface{}
	StatusCode                                         int64
	TemplatesNotAvailableInRegionException             *interface{}
	TooManyRequestsException                           *interface{}
}
