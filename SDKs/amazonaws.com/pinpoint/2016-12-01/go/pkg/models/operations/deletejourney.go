package operations

import (
"openapi/pkg/models/shared")

type DeleteJourneyPathParams struct {
    ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
    JourneyID string `pathParam:"style=simple,explode=false,name=journey-id"`
    
}

type DeleteJourneyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteJourneyRequest struct {
    PathParams DeleteJourneyPathParams 
    Headers DeleteJourneyHeaders 
    
}

type DeleteJourneyResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DeleteJourneyResponse *shared.DeleteJourneyResponse 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    MethodNotAllowedException *interface{} 
    NotFoundException *interface{} 
    PayloadTooLargeException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

