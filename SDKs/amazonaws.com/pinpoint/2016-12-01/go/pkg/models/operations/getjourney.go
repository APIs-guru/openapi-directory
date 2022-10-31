package operations

import (
"openapi/pkg/models/shared")

type GetJourneyPathParams struct {
    ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
    JourneyID string `pathParam:"style=simple,explode=false,name=journey-id"`
    
}

type GetJourneyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetJourneyRequest struct {
    PathParams GetJourneyPathParams 
    Headers GetJourneyHeaders 
    
}

type GetJourneyResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    ForbiddenException *interface{} 
    GetJourneyResponse *shared.GetJourneyResponse 
    InternalServerErrorException *interface{} 
    MethodNotAllowedException *interface{} 
    NotFoundException *interface{} 
    PayloadTooLargeException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

