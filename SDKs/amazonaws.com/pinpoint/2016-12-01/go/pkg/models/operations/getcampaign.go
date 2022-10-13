package operations

import (
	"openapi/pkg/models/shared"
)

type GetCampaignPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	CampaignID    string `pathParam:"style=simple,explode=false,name=campaign-id"`
}

type GetCampaignHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCampaignRequest struct {
	PathParams GetCampaignPathParams
	Headers    GetCampaignHeaders
}

type GetCampaignResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	GetCampaignResponse          *shared.GetCampaignResponse
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
