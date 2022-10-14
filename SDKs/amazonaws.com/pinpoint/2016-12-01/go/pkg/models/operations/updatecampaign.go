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
	AdditionalTreatments        []shared.WriteTreatmentResource     `json:"AdditionalTreatments,omitempty"`
	CustomDeliveryConfiguration *shared.CustomDeliveryConfiguration `json:"CustomDeliveryConfiguration,omitempty"`
	Description                 *string                             `json:"Description,omitempty"`
	HoldoutPercent              *int64                              `json:"HoldoutPercent,omitempty"`
	Hook                        *shared.CampaignHook                `json:"Hook,omitempty"`
	IsPaused                    *bool                               `json:"IsPaused,omitempty"`
	Limits                      *shared.CampaignLimits              `json:"Limits,omitempty"`
	MessageConfiguration        *shared.MessageConfiguration        `json:"MessageConfiguration,omitempty"`
	Name                        *string                             `json:"Name,omitempty"`
	Priority                    *int64                              `json:"Priority,omitempty"`
	Schedule                    *shared.Schedule                    `json:"Schedule,omitempty"`
	SegmentID                   *string                             `json:"SegmentId,omitempty"`
	SegmentVersion              *int64                              `json:"SegmentVersion,omitempty"`
	TemplateConfiguration       *shared.TemplateConfiguration       `json:"TemplateConfiguration,omitempty"`
	TreatmentDescription        *string                             `json:"TreatmentDescription,omitempty"`
	TreatmentName               *string                             `json:"TreatmentName,omitempty"`
	Tags                        map[string]string                   `json:"tags,omitempty"`
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
