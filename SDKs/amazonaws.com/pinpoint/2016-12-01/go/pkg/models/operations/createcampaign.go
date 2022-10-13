package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCampaignPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type CreateCampaignHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateCampaignRequestBodyWriteCampaignRequest struct {
	AdditionalTreatments        []shared.WriteTreatmentResource     `json:"AdditionalTreatments"`
	CustomDeliveryConfiguration *shared.CustomDeliveryConfiguration `json:"CustomDeliveryConfiguration"`
	Description                 *string                             `json:"Description"`
	HoldoutPercent              *int64                              `json:"HoldoutPercent"`
	Hook                        *shared.CampaignHook                `json:"Hook"`
	IsPaused                    *bool                               `json:"IsPaused"`
	Limits                      *shared.CampaignLimits              `json:"Limits"`
	MessageConfiguration        *shared.MessageConfiguration        `json:"MessageConfiguration"`
	Name                        *string                             `json:"Name"`
	Priority                    *int64                              `json:"Priority"`
	Schedule                    *shared.Schedule                    `json:"Schedule"`
	SegmentID                   *string                             `json:"SegmentId"`
	SegmentVersion              *int64                              `json:"SegmentVersion"`
	TemplateConfiguration       *shared.TemplateConfiguration       `json:"TemplateConfiguration"`
	TreatmentDescription        *string                             `json:"TreatmentDescription"`
	TreatmentName               *string                             `json:"TreatmentName"`
	Tags                        map[string]string                   `json:"tags"`
}

type CreateCampaignRequestBody struct {
	WriteCampaignRequest CreateCampaignRequestBodyWriteCampaignRequest `json:"WriteCampaignRequest"`
}

type CreateCampaignRequest struct {
	PathParams CreateCampaignPathParams
	Headers    CreateCampaignHeaders
	Request    CreateCampaignRequestBody `request:"mediaType=application/json"`
}

type CreateCampaignResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	CreateCampaignResponse       *shared.CreateCampaignResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
