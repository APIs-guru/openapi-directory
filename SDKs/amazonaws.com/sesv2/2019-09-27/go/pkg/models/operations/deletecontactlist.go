package operations

type DeleteContactListPathParams struct {
	ContactListName string `pathParam:"style=simple,explode=false,name=ContactListName"`
}

type DeleteContactListHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteContactListRequest struct {
	PathParams DeleteContactListPathParams
	Headers    DeleteContactListHeaders
}

type DeleteContactListResponse struct {
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteContactListResponse       map[string]interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
