package operations

import (
"openapi/pkg/models/shared")

type GetContactListPathParams struct {
    ContactListName string `pathParam:"style=simple,explode=false,name=ContactListName"`
    
}

type GetContactListHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetContactListRequest struct {
    PathParams GetContactListPathParams 
    Headers GetContactListHeaders 
    
}

type GetContactListResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetContactListResponse *shared.GetContactListResponse 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

