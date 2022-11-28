package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateGroupRequestBodyInsightsConfiguration
// The structure containing configurations related to insights.
type CreateGroupRequestBodyInsightsConfiguration struct {
	InsightsEnabled      *bool `json:"InsightsEnabled,omitempty"`
	NotificationsEnabled *bool `json:"NotificationsEnabled,omitempty"`
}

type CreateGroupRequestBody struct {
	FilterExpression      *string                                      `json:"FilterExpression,omitempty"`
	GroupName             string                                       `json:"GroupName"`
	InsightsConfiguration *CreateGroupRequestBodyInsightsConfiguration `json:"InsightsConfiguration,omitempty"`
	Tags                  []shared.Tag                                 `json:"Tags,omitempty"`
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
