package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateGroupRequestBodyInsightsConfiguration struct {
	InsightsEnabled      *bool `json:"InsightsEnabled"`
	NotificationsEnabled *bool `json:"NotificationsEnabled"`
}

type CreateGroupRequestBody struct {
	FilterExpression      *string                                      `json:"FilterExpression"`
	GroupName             string                                       `json:"GroupName"`
	InsightsConfiguration *CreateGroupRequestBodyInsightsConfiguration `json:"InsightsConfiguration"`
	Tags                  []shared.Tag                                 `json:"Tags"`
}

type CreateGroupRequest struct {
	Headers CreateGroupHeaders
	Request CreateGroupRequestBody `request:"mediaType=application/json"`
}

type CreateGroupResponse struct {
	ContentType             string
	CreateGroupResult       *shared.CreateGroupResult
	InvalidRequestException *interface{}
	StatusCode              int64
	ThrottledException      *interface{}
}
