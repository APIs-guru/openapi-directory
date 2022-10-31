package operations



type DeleteObjectPathParams struct {
    Path string `pathParam:"style=simple,explode=false,name=Path"`
    
}

type DeleteObjectHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteObjectRequest struct {
    PathParams DeleteObjectPathParams 
    Headers DeleteObjectHeaders 
    
}

type DeleteObjectResponse struct {
    ContainerNotFoundException *interface{} 
    ContentType string 
    DeleteObjectResponse map[string]interface{} 
    InternalServerError *interface{} 
    ObjectNotFoundException *interface{} 
    StatusCode int64 
    
}

