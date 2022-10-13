package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateGroupRequestBodyInsightsConfiguration struct {
	InsightsEnabled      *bool `json:"InsightsEnabled"`
	NotificationsEnabled *bool `json:"NotificationsEnabled"`
}

type UpdateGroupRequestBody struct {
	FilterExpression      *string                                      `json:"FilterExpression"`
	GroupArn              *string                                      `json:"GroupARN"`
	GroupName             *string                                      `json:"GroupName"`
	InsightsConfiguration *UpdateGroupRequestBodyInsightsConfiguration `json:"InsightsConfiguration"`
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
