package operations

import (
	"openapi/pkg/models/shared"
)

type GetAwsDefaultServiceQuotaXAmzTargetEnum string

const (
	GetAwsDefaultServiceQuotaXAmzTargetEnumServiceQuotasV20190624GetAwsDefaultServiceQuota GetAwsDefaultServiceQuotaXAmzTargetEnum = "ServiceQuotasV20190624.GetAWSDefaultServiceQuota"
)

type GetAwsDefaultServiceQuotaHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetAwsDefaultServiceQuotaXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetAwsDefaultServiceQuotaRequest struct {
	Headers GetAwsDefaultServiceQuotaHeaders
	Request shared.GetAwsDefaultServiceQuotaRequest `request:"mediaType=application/json"`
}

type GetAwsDefaultServiceQuotaResponse struct {
	AccessDeniedException             *interface{}
	ContentType                       string
	GetAwsDefaultServiceQuotaResponse *shared.GetAwsDefaultServiceQuotaResponse
	IllegalArgumentException          *interface{}
	NoSuchResourceException           *interface{}
	ServiceException                  *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
}
