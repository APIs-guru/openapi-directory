package operations



type DeleteSitePathParams struct {
    SiteID string `pathParam:"style=simple,explode=false,name=SiteId"`
    
}

type DeleteSiteHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteSiteRequest struct {
    PathParams DeleteSitePathParams 
    Headers DeleteSiteHeaders 
    
}

type DeleteSiteResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    DeleteSiteOutput map[string]interface{} 
    InternalServerException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

