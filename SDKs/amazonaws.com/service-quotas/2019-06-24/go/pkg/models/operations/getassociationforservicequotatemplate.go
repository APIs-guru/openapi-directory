package operations

import (
	"openapi/pkg/models/shared"
)

type GetAssociationForServiceQuotaTemplateXAmzTargetEnum string

const (
	GetAssociationForServiceQuotaTemplateXAmzTargetEnumServiceQuotasV20190624GetAssociationForServiceQuotaTemplate GetAssociationForServiceQuotaTemplateXAmzTargetEnum = "ServiceQuotasV20190624.GetAssociationForServiceQuotaTemplate"
)

type GetAssociationForServiceQuotaTemplateHeaders struct {
	XAmzAlgorithm     *string                                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAssociationForServiceQuotaTemplateXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetAssociationForServiceQuotaTemplateRequest struct {
	Headers GetAssociationForServiceQuotaTemplateHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetAssociationForServiceQuotaTemplateResponse struct {
	AwsServiceAccessNotEnabledException           *interface{}
	AccessDeniedException                         *interface{}
	ContentType                                   string
	DependencyAccessDeniedException               *interface{}
	GetAssociationForServiceQuotaTemplateResponse *shared.GetAssociationForServiceQuotaTemplateResponse
	NoAvailableOrganizationException              *interface{}
	ServiceException                              *interface{}
	ServiceQuotaTemplateNotInUseException         *interface{}
	StatusCode                                    int64
	TemplatesNotAvailableInRegionException        *interface{}
	TooManyRequestsException                      *interface{}
}
