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
	ChatbotSns []string               `json:"chatbotSns,omitempty"`
	Empty      map[string]interface{} `json:"empty,omitempty"`
}

type CreateResponsePlanRequestBodyIncidentTemplate struct {
	DedupeString        *string                         `json:"dedupeString,omitempty"`
	Impact              *int64                          `json:"impact,omitempty"`
	NotificationTargets []shared.NotificationTargetItem `json:"notificationTargets,omitempty"`
	Summary             *string                         `json:"summary,omitempty"`
	Title               *string                         `json:"title,omitempty"`
}

type CreateResponsePlanRequestBody struct {
	Actions          []shared.Action                               `json:"actions,omitempty"`
	ChatChannel      *CreateResponsePlanRequestBodyChatChannel     `json:"chatChannel,omitempty"`
	ClientToken      *string                                       `json:"clientToken,omitempty"`
	DisplayName      *string                                       `json:"displayName,omitempty"`
	Engagements      []string                                      `json:"engagements,omitempty"`
	IncidentTemplate CreateResponsePlanRequestBodyIncidentTemplate `json:"incidentTemplate"`
	Name             string                                        `json:"name"`
	Tags             map[string]string                             `json:"tags,omitempty"`
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
