package operations

import (
	"openapi/pkg/models/shared"
)

type GetRequestedServiceQuotaChangeXAmzTargetEnum string

const (
	GetRequestedServiceQuotaChangeXAmzTargetEnumServiceQuotasV20190624GetRequestedServiceQuotaChange GetRequestedServiceQuotaChangeXAmzTargetEnum = "ServiceQuotasV20190624.GetRequestedServiceQuotaChange"
)

type GetRequestedServiceQuotaChangeHeaders struct {
	XAmzAlgorithm     *string                                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRequestedServiceQuotaChangeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRequestedServiceQuotaChangeRequest struct {
	Headers GetRequestedServiceQuotaChangeHeaders
	Request shared.GetRequestedServiceQuotaChangeRequest `request:"mediaType=application/json"`
}

type GetRequestedServiceQuotaChangeResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	GetRequestedServiceQuotaChangeResponse *shared.GetRequestedServiceQuotaChangeResponse
	IllegalArgumentException               *interface{}
	NoSuchResourceException                *interface{}
	ServiceException                       *interface{}
	StatusCode                             int64
	TooManyRequestsException               *interface{}
}
