package operations

import (
	"openapi/pkg/models/shared"
)

type GetRequestedServiceQuotaChangeXAmzTargetEnum string

const (
	GetRequestedServiceQuotaChangeXAmzTargetEnumServiceQuotasV20190624GetRequestedServiceQuotaChange GetRequestedServiceQuotaChangeXAmzTargetEnum = "ServiceQuotasV20190624.GetRequestedServiceQuotaChange"
)

type GetRequestedServiceQuotaChangeHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRequestedServiceQuotaChangeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
