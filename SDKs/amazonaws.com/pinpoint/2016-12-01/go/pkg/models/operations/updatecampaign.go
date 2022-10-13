package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCampaignPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	CampaignID    string `pathParam:"style=simple,explode=false,name=campaign-id"`
}

type UpdateCampaignHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateCampaignRequestBodyWriteCampaignRequest struct {
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

type UpdateCampaignRequestBody struct {
	WriteCampaignRequest UpdateCampaignRequestBodyWriteCampaignRequest `json:"WriteCampaignRequest"`
}

type UpdateCampaignRequest struct {
	PathParams UpdateCampaignPathParams
	Headers    UpdateCampaignHeaders
	Request    UpdateCampaignRequestBody `request:"mediaType=application/json"`
}

type UpdateCampaignResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateCampaignResponse       *shared.UpdateCampaignResponse
}
