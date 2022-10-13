package operations

type PutEmailIdentityMailFromAttributesPathParams struct {
	EmailIdentity string `pathParam:"style=simple,explode=false,name=EmailIdentity"`
}

type PutEmailIdentityMailFromAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum string

const (
	PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnumUseDefaultValue PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum = "USE_DEFAULT_VALUE"
	PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnumRejectMessage   PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum = "REJECT_MESSAGE"
)

type PutEmailIdentityMailFromAttributesRequestBody struct {
	BehaviorOnMxFailure *PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum `json:"BehaviorOnMxFailure"`
	MailFromDomain      *string                                                               `json:"MailFromDomain"`
}

type PutEmailIdentityMailFromAttributesRequest struct {
	PathParams PutEmailIdentityMailFromAttributesPathParams
	Headers    PutEmailIdentityMailFromAttributesHeaders
	Request    PutEmailIdentityMailFromAttributesRequestBody `request:"mediaType=application/json"`
}

type PutEmailIdentityMailFromAttributesResponse struct {
	BadRequestException                        *interface{}
	ContentType                                string
	NotFoundException                          *interface{}
	PutEmailIdentityMailFromAttributesResponse map[string]interface{}
	StatusCode                                 int64
	TooManyRequestsException                   *interface{}
}
