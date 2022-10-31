package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateGroupRequestBodyInsightsConfiguration struct {
	InsightsEnabled      *bool `json:"InsightsEnabled,omitempty"`
	NotificationsEnabled *bool `json:"NotificationsEnabled,omitempty"`
}

type UpdateGroupRequestBody struct {
	FilterExpression      *string                                      `json:"FilterExpression,omitempty"`
	GroupArn              *string                                      `json:"GroupARN,omitempty"`
	GroupName             *string                                      `json:"GroupName,omitempty"`
	InsightsConfiguration *UpdateGroupRequestBodyInsightsConfiguration `json:"InsightsConfiguration,omitempty"`
}

type UpdateGroupRequest struct {
	Headers UpdateGroupHeaders
	Request UpdateGroupRequestBody `request:"mediaType=application/json"`
}

type UpdateGroupResponse struct {
	ContentType             string
	InvalidRequestException *interface{}
	StatusCode              int64
	ThrottledException      *interface{}
	UpdateGroupResult       *shared.UpdateGroupResult
}
