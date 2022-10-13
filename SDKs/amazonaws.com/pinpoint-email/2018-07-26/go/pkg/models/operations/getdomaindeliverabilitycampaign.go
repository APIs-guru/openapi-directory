package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainDeliverabilityCampaignPathParams struct {
	CampaignID string `pathParam:"style=simple,explode=false,name=CampaignId"`
}

type GetDomainDeliverabilityCampaignHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDomainDeliverabilityCampaignRequest struct {
	PathParams GetDomainDeliverabilityCampaignPathParams
	Headers    GetDomainDeliverabilityCampaignHeaders
}

type GetDomainDeliverabilityCampaignResponse struct {
	BadRequestException                     *interface{}
	ContentType                             string
	GetDomainDeliverabilityCampaignResponse *shared.GetDomainDeliverabilityCampaignResponse
	NotFoundException                       *interface{}
	StatusCode                              int64
	TooManyRequestsException                *interface{}
}
