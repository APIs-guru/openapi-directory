package operations

import (
	"openapi/pkg/models/shared"
)

type GetOperationDetailXAmzTargetEnum string

const (
	GetOperationDetailXAmzTargetEnumRoute53DomainsV20140515GetOperationDetail GetOperationDetailXAmzTargetEnum = "Route53Domains_v20140515.GetOperationDetail"
)

type GetOperationDetailHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetOperationDetailXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetOperationDetailRequest struct {
	Headers GetOperationDetailHeaders
	Request shared.GetOperationDetailRequest `request:"mediaType=application/json"`
}

type GetOperationDetailResponse struct {
	ContentType                string
	GetOperationDetailResponse *shared.GetOperationDetailResponse
	InvalidInput               *interface{}
	StatusCode                 int64
}
