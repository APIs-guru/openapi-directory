package operations

import (
"openapi/pkg/models/shared")

type GetCustomDataIdentifierPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetCustomDataIdentifierHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCustomDataIdentifierRequest struct {
    PathParams GetCustomDataIdentifierPathParams 
    Headers GetCustomDataIdentifierHeaders 
    
}

type GetCustomDataIdentifierResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    GetCustomDataIdentifierResponse *shared.GetCustomDataIdentifierResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

