package operations



type PutEmailIdentityMailFromAttributesPathParams struct {
    EmailIdentity string `pathParam:"style=simple,explode=false,name=EmailIdentity"`
    
}

type PutEmailIdentityMailFromAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum string

const (
    PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnumUseDefaultValue PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum = "USE_DEFAULT_VALUE"
PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnumRejectMessage PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum = "REJECT_MESSAGE"
)


type PutEmailIdentityMailFromAttributesRequestBody struct {
    BehaviorOnMxFailure *PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum `json:"BehaviorOnMxFailure,omitempty"`
    MailFromDomain *string `json:"MailFromDomain,omitempty"`
    
}

type PutEmailIdentityMailFromAttributesRequest struct {
    PathParams PutEmailIdentityMailFromAttributesPathParams 
    Headers PutEmailIdentityMailFromAttributesHeaders 
    Request PutEmailIdentityMailFromAttributesRequestBody `request:"mediaType=application/json"`
    
}

type PutEmailIdentityMailFromAttributesResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    NotFoundException *interface{} 
    PutEmailIdentityMailFromAttributesResponse map[string]interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

