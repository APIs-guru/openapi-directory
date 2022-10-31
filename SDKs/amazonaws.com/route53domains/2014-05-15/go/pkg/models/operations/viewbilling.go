package operations

import (
	"openapi/pkg/models/shared"
)

type ViewBillingXAmzTargetEnum string

const (
	ViewBillingXAmzTargetEnumRoute53DomainsV20140515ViewBilling ViewBillingXAmzTargetEnum = "Route53Domains_v20140515.ViewBilling"
)

type ViewBillingHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ViewBillingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ViewBillingRequest struct {
	Headers ViewBillingHeaders
	Request shared.ViewBillingRequest `request:"mediaType=application/json"`
}

type ViewBillingResponse struct {
	ContentType         string
	InvalidInput        *interface{}
	StatusCode          int64
	ViewBillingResponse *shared.ViewBillingResponse
}
