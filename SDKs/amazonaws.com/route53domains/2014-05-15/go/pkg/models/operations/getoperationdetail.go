package operations

import (
	"openapi/pkg/models/shared"
)

type GetOperationDetailXAmzTargetEnum string

const (
	GetOperationDetailXAmzTargetEnumRoute53DomainsV20140515GetOperationDetail GetOperationDetailXAmzTargetEnum = "Route53Domains_v20140515.GetOperationDetail"
)

type GetOperationDetailHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetOperationDetailXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
