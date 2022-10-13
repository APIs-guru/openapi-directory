package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContactPathParams struct {
	ContactListName string `pathParam:"style=simple,explode=false,name=ContactListName"`
}

type CreateContactHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateContactRequestBody struct {
	AttributesData   *string                  `json:"AttributesData"`
	EmailAddress     string                   `json:"EmailAddress"`
	TopicPreferences []shared.TopicPreference `json:"TopicPreferences"`
	UnsubscribeAll   *bool                    `json:"UnsubscribeAll"`
}

type CreateContactRequest struct {
	PathParams CreateContactPathParams
	Headers    CreateContactHeaders
	Request    CreateContactRequestBody `request:"mediaType=application/json"`
}

type CreateContactResponse struct {
	AlreadyExistsException   *interface{}
	BadRequestException      *interface{}
	ContentType              string
	CreateContactResponse    map[string]interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
