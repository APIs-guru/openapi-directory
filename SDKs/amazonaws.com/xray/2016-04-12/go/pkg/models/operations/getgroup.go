package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGroupRequestBody struct {
	GroupArn  *string `json:"GroupARN"`
	GroupName *string `json:"GroupName"`
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
