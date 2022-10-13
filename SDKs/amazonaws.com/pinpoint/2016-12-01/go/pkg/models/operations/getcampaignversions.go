package operations

import (
	"openapi/pkg/models/shared"
)

type GetCampaignVersionsPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	CampaignID    string `pathParam:"style=simple,explode=false,name=campaign-id"`
}

type GetCampaignVersionsQueryParams struct {
	PageSize *string `queryParam:"style=form,explode=true,name=page-size"`
	Token    *string `queryParam:"style=form,explode=true,name=token"`
}

type GetCampaignVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCampaignVersionsRequest struct {
	PathParams  GetCampaignVersionsPathParams
	QueryParams GetCampaignVersionsQueryParams
	Headers     GetCampaignVersionsHeaders
}

type GetCampaignVersionsResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	GetCampaignVersionsResponse  *shared.GetCampaignVersionsResponse
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
