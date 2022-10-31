package operations



type PutEmailIdentityFeedbackAttributesPathParams struct {
    EmailIdentity string `pathParam:"style=simple,explode=false,name=EmailIdentity"`
    
}

type PutEmailIdentityFeedbackAttributesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PutEmailIdentityFeedbackAttributesRequestBody struct {
    EmailForwardingEnabled *bool `json:"EmailForwardingEnabled,omitempty"`
    
}

type PutEmailIdentityFeedbackAttributesRequest struct {
    PathParams PutEmailIdentityFeedbackAttributesPathParams 
    Headers PutEmailIdentityFeedbackAttributesHeaders 
    Request PutEmailIdentityFeedbackAttributesRequestBody `request:"mediaType=application/json"`
    
}

type PutEmailIdentityFeedbackAttributesResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    NotFoundException *interface{} 
    PutEmailIdentityFeedbackAttributesResponse map[string]interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

