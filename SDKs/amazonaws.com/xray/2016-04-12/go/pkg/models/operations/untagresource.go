package operations



type UntagResourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UntagResourceRequestBody struct {
    ResourceArn string `json:"ResourceARN"`
    TagKeys []string `json:"TagKeys"`
    
}

type UntagResourceRequest struct {
    Headers UntagResourceHeaders 
    Request UntagResourceRequestBody `request:"mediaType=application/json"`
    
}

type UntagResourceResponse struct {
    ContentType string 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottledException *interface{} 
    UntagResourceResponse map[string]interface{} 
    
}

