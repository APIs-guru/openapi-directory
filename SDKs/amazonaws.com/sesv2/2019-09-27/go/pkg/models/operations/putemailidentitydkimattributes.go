package operations

type PutEmailIdentityDkimAttributesPathParams struct {
	EmailIdentity string `pathParam:"style=simple,explode=false,name=EmailIdentity"`
}

type PutEmailIdentityDkimAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutEmailIdentityDkimAttributesRequestBody struct {
	SigningEnabled *bool `json:"SigningEnabled,omitempty"`
}

type PutEmailIdentityDkimAttributesRequest struct {
	PathParams PutEmailIdentityDkimAttributesPathParams
	Headers    PutEmailIdentityDkimAttributesHeaders
	Request    PutEmailIdentityDkimAttributesRequestBody `request:"mediaType=application/json"`
}

type PutEmailIdentityDkimAttributesResponse struct {
	BadRequestException                    *interface{}
	ContentType                            string
	NotFoundException                      *interface{}
	PutEmailIdentityDkimAttributesResponse map[string]interface{}
	StatusCode                             int64
	TooManyRequestsException               *interface{}
}
