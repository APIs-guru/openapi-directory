package operations

import (
"openapi/pkg/models/shared")

type ListJourneysPathParams struct {
    ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
    
}

type ListJourneysQueryParams struct {
    PageSize *string `queryParam:"style=form,explode=true,name=page-size"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    
}

type ListJourneysHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListJourneysRequest struct {
    PathParams ListJourneysPathParams 
    QueryParams ListJourneysQueryParams 
    Headers ListJourneysHeaders 
    
}

type ListJourneysResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    ListJourneysResponse *shared.ListJourneysResponse 
    MethodNotAllowedException *interface{} 
    NotFoundException *interface{} 
    PayloadTooLargeException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

