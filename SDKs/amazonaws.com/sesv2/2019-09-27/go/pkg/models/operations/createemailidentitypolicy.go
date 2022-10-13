package operations

type CreateEmailIdentityPolicyPathParams struct {
	EmailIdentity string `pathParam:"style=simple,explode=false,name=EmailIdentity"`
	PolicyName    string `pathParam:"style=simple,explode=false,name=PolicyName"`
}

type CreateEmailIdentityPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateEmailIdentityPolicyRequestBody struct {
	Policy string `json:"Policy"`
}

type CreateEmailIdentityPolicyRequest struct {
	PathParams CreateEmailIdentityPolicyPathParams
	Headers    CreateEmailIdentityPolicyHeaders
	Request    CreateEmailIdentityPolicyRequestBody `request:"mediaType=application/json"`
}

type CreateEmailIdentityPolicyResponse struct {
	AlreadyExistsException            *interface{}
	BadRequestException               *interface{}
	ContentType                       string
	CreateEmailIdentityPolicyResponse map[string]interface{}
	LimitExceededException            *interface{}
	NotFoundException                 *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
}
