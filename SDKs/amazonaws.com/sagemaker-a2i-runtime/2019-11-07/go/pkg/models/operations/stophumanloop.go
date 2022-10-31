package operations



type StopHumanLoopHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type StopHumanLoopRequestBody struct {
    HumanLoopName string `json:"HumanLoopName"`
    
}

type StopHumanLoopRequest struct {
    Headers StopHumanLoopHeaders 
    Request StopHumanLoopRequestBody `request:"mediaType=application/json"`
    
}

type StopHumanLoopResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    StopHumanLoopResponse map[string]interface{} 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

