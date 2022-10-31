package operations



type UntagResourcePathParams struct {
    ResourceArn string `pathParam:"style=simple,explode=false,name=resourceArn"`
    
}

type UntagResourceQueryParams struct {
    TagKeys []string `queryParam:"style=form,explode=true,name=tagKeys"`
    
}

type UntagResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UntagResourceRequest struct {
    PathParams UntagResourcePathParams 
    QueryParams UntagResourceQueryParams 
    Headers UntagResourceHeaders 
    
}

type UntagResourceResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UntagResourceResponse map[string]interface{} 
    ValidationException *interface{} 
    
}

