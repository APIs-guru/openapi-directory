package operations

type DeleteContactPathParams struct {
	ContactListName string `pathParam:"style=simple,explode=false,name=ContactListName"`
	EmailAddress    string `pathParam:"style=simple,explode=false,name=EmailAddress"`
}

type DeleteContactHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DeleteContactRequest struct {
	PathParams DeleteContactPathParams
	Headers    DeleteContactHeaders
}

type DeleteContactResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	DeleteContactResponse    map[string]interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	TooManyRequestsException *interface{}
}
