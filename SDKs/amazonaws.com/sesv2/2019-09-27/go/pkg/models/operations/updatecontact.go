package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateContactPathParams struct {
	ContactListName string `pathParam:"style=simple,explode=false,name=ContactListName"`
	EmailAddress    string `pathParam:"style=simple,explode=false,name=EmailAddress"`
}

type UpdateContactHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateContactRequestBody struct {
	AttributesData   *string                  `json:"AttributesData"`
	TopicPreferences []shared.TopicPreference `json:"TopicPreferences"`
	UnsubscribeAll   *bool                    `json:"UnsubscribeAll"`
}

type UpdateContactRequest struct {
	PathParams UpdateContactPathParams
	Headers    UpdateContactHeaders
	Request    UpdateContactRequestBody `request:"mediaType=application/json"`
}

type UpdateContactResponse struct {
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	NotFoundException               *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
	UpdateContactResponse           map[string]interface{}
}
