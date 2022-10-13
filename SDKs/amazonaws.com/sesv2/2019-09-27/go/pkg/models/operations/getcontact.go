package operations

import (
	"openapi/pkg/models/shared"
)

type GetContactPathParams struct {
	ContactListName string `pathParam:"style=simple,explode=false,name=ContactListName"`
	EmailAddress    string `pathParam:"style=simple,explode=false,name=EmailAddress"`
}

type GetContactHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetContactRequest struct {
	PathParams GetContactPathParams
	Headers    GetContactHeaders
}

type GetContactResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetContactResponse       *shared.GetContactResponse
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
