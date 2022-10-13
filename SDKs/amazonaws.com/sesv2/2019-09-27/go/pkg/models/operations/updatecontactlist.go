package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateContactListPathParams struct {
	ContactListName string `pathParam:"style=simple,explode=false,name=ContactListName"`
}

type UpdateContactListHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateContactListRequestBody struct {
	Description *string        `json:"Description"`
	Topics      []shared.Topic `json:"Topics"`
}

type UpdateContactListRequest struct {
	PathParams UpdateContactListPathParams
	Headers    UpdateContactListHeaders
	Request    UpdateContactListRequestBody `request:"mediaType=application/json"`
}

type UpdateContactListResponse struct {
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	NotFoundException               *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
	UpdateContactListResponse       map[string]interface{}
}
