package operations

type UpdateEmailIdentityPolicyPathParams struct {
	EmailIdentity string `pathParam:"style=simple,explode=false,name=EmailIdentity"`
	PolicyName    string `pathParam:"style=simple,explode=false,name=PolicyName"`
}

type UpdateEmailIdentityPolicyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateEmailIdentityPolicyRequestBody struct {
	Policy string `json:"Policy"`
}

type UpdateEmailIdentityPolicyRequest struct {
	PathParams UpdateEmailIdentityPolicyPathParams
	Headers    UpdateEmailIdentityPolicyHeaders
	Request    UpdateEmailIdentityPolicyRequestBody `request:"mediaType=application/json"`
}

type UpdateEmailIdentityPolicyResponse struct {
	BadRequestException               *interface{}
	ContentType                       string
	NotFoundException                 *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
	UpdateEmailIdentityPolicyResponse map[string]interface{}
}
