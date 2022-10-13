package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateResponsePlanHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateResponsePlanRequestBodyChatChannel struct {
	ChatbotSns []string               `json:"chatbotSns"`
	Empty      map[string]interface{} `json:"empty"`
}

type UpdateResponsePlanRequestBody struct {
	Actions                             []shared.Action                           `json:"actions"`
	Arn                                 string                                    `json:"arn"`
	ChatChannel                         *UpdateResponsePlanRequestBodyChatChannel `json:"chatChannel"`
	ClientToken                         *string                                   `json:"clientToken"`
	DisplayName                         *string                                   `json:"displayName"`
	Engagements                         []string                                  `json:"engagements"`
	IncidentTemplateDedupeString        *string                                   `json:"incidentTemplateDedupeString"`
	IncidentTemplateImpact              *int64                                    `json:"incidentTemplateImpact"`
	IncidentTemplateNotificationTargets []shared.NotificationTargetItem           `json:"incidentTemplateNotificationTargets"`
	IncidentTemplateSummary             *string                                   `json:"incidentTemplateSummary"`
	IncidentTemplateTitle               *string                                   `json:"incidentTemplateTitle"`
}

type UpdateResponsePlanRequest struct {
	Headers UpdateResponsePlanHeaders
	Request UpdateResponsePlanRequestBody `request:"mediaType=application/json"`
}

type UpdateResponsePlanResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	UpdateResponsePlanOutput  map[string]interface{}
	ValidationException       *interface{}
}
