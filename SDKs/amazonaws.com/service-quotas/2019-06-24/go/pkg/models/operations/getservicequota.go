package operations

import (
	"openapi/pkg/models/shared"
)

type GetServiceQuotaXAmzTargetEnum string

const (
	GetServiceQuotaXAmzTargetEnumServiceQuotasV20190624GetServiceQuota GetServiceQuotaXAmzTargetEnum = "ServiceQuotasV20190624.GetServiceQuota"
)

type GetServiceQuotaHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetServiceQuotaXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetServiceQuotaRequest struct {
	Headers GetServiceQuotaHeaders
	Request shared.GetServiceQuotaRequest `request:"mediaType=application/json"`
}

type GetServiceQuotaResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	GetServiceQuotaResponse  *shared.GetServiceQuotaResponse
	IllegalArgumentException *interface{}
	NoSuchResourceException  *interface{}
	ServiceException         *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
