package operations



type DeleteEmailIdentityPolicyPathParams struct {
    EmailIdentity string `pathParam:"style=simple,explode=false,name=EmailIdentity"`
    PolicyName string `pathParam:"style=simple,explode=false,name=PolicyName"`
    
}

type DeleteEmailIdentityPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteEmailIdentityPolicyRequest struct {
    PathParams DeleteEmailIdentityPolicyPathParams 
    Headers DeleteEmailIdentityPolicyHeaders 
    
}

type DeleteEmailIdentityPolicyResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DeleteEmailIdentityPolicyResponse map[string]interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

