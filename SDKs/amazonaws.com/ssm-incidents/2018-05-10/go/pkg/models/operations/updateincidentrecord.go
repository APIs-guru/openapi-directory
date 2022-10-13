package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateIncidentRecordHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateIncidentRecordRequestBodyChatChannel struct {
	ChatbotSns []string               `json:"chatbotSns"`
	Empty      map[string]interface{} `json:"empty"`
}

type UpdateIncidentRecordRequestBodyStatusEnum string

const (
	UpdateIncidentRecordRequestBodyStatusEnumOpen     UpdateIncidentRecordRequestBodyStatusEnum = "OPEN"
	UpdateIncidentRecordRequestBodyStatusEnumResolved UpdateIncidentRecordRequestBodyStatusEnum = "RESOLVED"
)

type UpdateIncidentRecordRequestBody struct {
	Arn                 string                                      `json:"arn"`
	ChatChannel         *UpdateIncidentRecordRequestBodyChatChannel `json:"chatChannel"`
	ClientToken         *string                                     `json:"clientToken"`
	Impact              *int64                                      `json:"impact"`
	NotificationTargets []shared.NotificationTargetItem             `json:"notificationTargets"`
	Status              *UpdateIncidentRecordRequestBodyStatusEnum  `json:"status"`
	Summary             *string                                     `json:"summary"`
	Title               *string                                     `json:"title"`
}

type UpdateIncidentRecordRequest struct {
	Headers UpdateIncidentRecordHeaders
	Request UpdateIncidentRecordRequestBody `request:"mediaType=application/json"`
}

type UpdateIncidentRecordResponse struct {
	AccessDeniedException      *interface{}
	ConflictException          *interface{}
	ContentType                string
	InternalServerException    *interface{}
	ResourceNotFoundException  *interface{}
	StatusCode                 int64
	ThrottlingException        *interface{}
	UpdateIncidentRecordOutput map[string]interface{}
	ValidationException        *interface{}
}
