package operations

import (
	"openapi/pkg/models/shared"
)

type ViewBillingXAmzTargetEnum string

const (
	ViewBillingXAmzTargetEnumRoute53DomainsV20140515ViewBilling ViewBillingXAmzTargetEnum = "Route53Domains_v20140515.ViewBilling"
)

type ViewBillingHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ViewBillingXAmzTargetEnum `header:"name=X-Amz-Target"`
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
