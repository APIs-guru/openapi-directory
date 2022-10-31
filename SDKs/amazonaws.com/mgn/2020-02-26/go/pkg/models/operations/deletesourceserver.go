package operations



type DeleteSourceServerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteSourceServerRequestBody struct {
    SourceServerID string `json:"sourceServerID"`
    
}

type DeleteSourceServerRequest struct {
    Headers DeleteSourceServerHeaders 
    Request DeleteSourceServerRequestBody `request:"mediaType=application/json"`
    
}

type DeleteSourceServerResponse struct {
    ConflictException *interface{} 
    ContentType string 
    DeleteSourceServerResponse map[string]interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UninitializedAccountException *interface{} 
    
}

