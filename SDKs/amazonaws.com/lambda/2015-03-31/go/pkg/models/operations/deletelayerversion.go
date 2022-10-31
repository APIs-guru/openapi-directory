package operations



type DeleteLayerVersionPathParams struct {
    LayerName string `pathParam:"style=simple,explode=false,name=LayerName"`
    VersionNumber int64 `pathParam:"style=simple,explode=false,name=VersionNumber"`
    
}

type DeleteLayerVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteLayerVersionRequest struct {
    PathParams DeleteLayerVersionPathParams 
    Headers DeleteLayerVersionHeaders 
    
}

type DeleteLayerVersionResponse struct {
    ContentType string 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

