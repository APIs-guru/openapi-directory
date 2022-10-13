package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeliverabilityDashboardOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeliverabilityDashboardOptionsRequest struct {
	Headers GetDeliverabilityDashboardOptionsHeaders
}

type GetDeliverabilityDashboardOptionsResponse struct {
	BadRequestException                       *interface{}
	ContentType                               string
	GetDeliverabilityDashboardOptionsResponse *shared.GetDeliverabilityDashboardOptionsResponse
	LimitExceededException                    *interface{}
	StatusCode                                int64
	TooManyRequestsException                  *interface{}
}
