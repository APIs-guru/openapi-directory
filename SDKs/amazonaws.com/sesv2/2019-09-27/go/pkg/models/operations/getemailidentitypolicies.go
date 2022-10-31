package operations

import (
"openapi/pkg/models/shared")

type GetEmailIdentityPoliciesPathParams struct {
    EmailIdentity string `pathParam:"style=simple,explode=false,name=EmailIdentity"`
    
}

type GetEmailIdentityPoliciesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetEmailIdentityPoliciesRequest struct {
    PathParams GetEmailIdentityPoliciesPathParams 
    Headers GetEmailIdentityPoliciesHeaders 
    
}

type GetEmailIdentityPoliciesResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetEmailIdentityPoliciesResponse *shared.GetEmailIdentityPoliciesResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

