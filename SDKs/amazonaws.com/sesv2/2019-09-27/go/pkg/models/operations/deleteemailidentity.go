package operations

type DeleteEmailIdentityPathParams struct {
	EmailIdentity string `pathParam:"style=simple,explode=false,name=EmailIdentity"`
}

type DeleteEmailIdentityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteEmailIdentityRequest struct {
	PathParams DeleteEmailIdentityPathParams
	Headers    DeleteEmailIdentityHeaders
}

type DeleteEmailIdentityResponse struct {
	BadRequestException             *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteEmailIdentityResponse     map[string]interface{}
	NotFoundException               *interface{}
	StatusCode                      int64
	TooManyRequestsException        *interface{}
}
