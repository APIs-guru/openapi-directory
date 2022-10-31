package operations



type DeleteHumanLoopPathParams struct {
    HumanLoopName string `pathParam:"style=simple,explode=false,name=HumanLoopName"`
    
}

type DeleteHumanLoopHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteHumanLoopRequest struct {
    PathParams DeleteHumanLoopPathParams 
    Headers DeleteHumanLoopHeaders 
    
}

type DeleteHumanLoopResponse struct {
    ContentType string 
    DeleteHumanLoopResponse map[string]interface{} 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

