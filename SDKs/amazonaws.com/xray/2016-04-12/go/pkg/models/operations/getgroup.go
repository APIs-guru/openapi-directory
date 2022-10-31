package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetGroupRequestBody struct {
	GroupArn  *string `json:"GroupARN,omitempty"`
	GroupName *string `json:"GroupName,omitempty"`
}

type GetGroupRequest struct {
	Headers GetGroupHeaders
	Request GetGroupRequestBody `request:"mediaType=application/json"`
}

type GetGroupResponse struct {
	ContentType             string
	GetGroupResult          *shared.GetGroupResult
	InvalidRequestException *interface{}
	StatusCode              int64
	ThrottledException      *interface{}
}
