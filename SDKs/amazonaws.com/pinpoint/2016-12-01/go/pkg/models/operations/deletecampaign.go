package operations

import (
"openapi/pkg/models/shared")

type DeleteCampaignPathParams struct {
    ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
    CampaignID string `pathParam:"style=simple,explode=false,name=campaign-id"`
    
}

type DeleteCampaignHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteCampaignRequest struct {
    PathParams DeleteCampaignPathParams 
    Headers DeleteCampaignHeaders 
    
}

type DeleteCampaignResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DeleteCampaignResponse *shared.DeleteCampaignResponse 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    MethodNotAllowedException *interface{} 
    NotFoundException *interface{} 
    PayloadTooLargeException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

