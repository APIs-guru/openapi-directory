package operations

import (
	"openapi/pkg/models/shared"
)

type CreateResponsePlanHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateResponsePlanRequestBodyChatChannel struct {
	ChatbotSns []string               `json:"chatbotSns"`
	Empty      map[string]interface{} `json:"empty"`
}

type CreateResponsePlanRequestBodyIncidentTemplate struct {
	DedupeString        *string                         `json:"dedupeString"`
	Impact              *int64                          `json:"impact"`
	NotificationTargets []shared.NotificationTargetItem `json:"notificationTargets"`
	Summary             *string                         `json:"summary"`
	Title               *string                         `json:"title"`
}

type CreateResponsePlanRequestBody struct {
	Actions          []shared.Action                               `json:"actions"`
	ChatChannel      *CreateResponsePlanRequestBodyChatChannel     `json:"chatChannel"`
	ClientToken      *string                                       `json:"clientToken"`
	DisplayName      *string                                       `json:"displayName"`
	Engagements      []string                                      `json:"engagements"`
	IncidentTemplate CreateResponsePlanRequestBodyIncidentTemplate `json:"incidentTemplate"`
	Name             string                                        `json:"name"`
	Tags             map[string]string                             `json:"tags"`
}

type CreateResponsePlanRequest struct {
	Headers CreateResponsePlanHeaders
	Request CreateResponsePlanRequestBody `request:"mediaType=application/json"`
}

type CreateResponsePlanResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	CreateResponsePlanOutput  *shared.CreateResponsePlanOutput
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
