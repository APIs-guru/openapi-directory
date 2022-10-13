package operations

import (
	"openapi/pkg/models/shared"
)

type PutDeliverabilityDashboardOptionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutDeliverabilityDashboardOptionRequestBody struct {
	DashboardEnabled  bool                                        `json:"DashboardEnabled"`
	SubscribedDomains []shared.DomainDeliverabilityTrackingOption `json:"SubscribedDomains"`
}

type PutDeliverabilityDashboardOptionRequest struct {
	Headers PutDeliverabilityDashboardOptionHeaders
	Request PutDeliverabilityDashboardOptionRequestBody `request:"mediaType=application/json"`
}

type PutDeliverabilityDashboardOptionResponse struct {
	AlreadyExistsException                   *interface{}
	BadRequestException                      *interface{}
	ContentType                              string
	LimitExceededException                   *interface{}
	NotFoundException                        *interface{}
	PutDeliverabilityDashboardOptionResponse map[string]interface{}
	StatusCode                               int64
	TooManyRequestsException                 *interface{}
}
