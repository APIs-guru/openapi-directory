package operations



type UpdateActionTargetPathParams struct {
    ActionTargetArn string `pathParam:"style=simple,explode=false,name=ActionTargetArn"`
    
}

type UpdateActionTargetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateActionTargetRequestBody struct {
    Description *string `json:"Description,omitempty"`
    Name *string `json:"Name,omitempty"`
    
}

type UpdateActionTargetRequest struct {
    PathParams UpdateActionTargetPathParams 
    Headers UpdateActionTargetHeaders 
    Request UpdateActionTargetRequestBody `request:"mediaType=application/json"`
    
}

type UpdateActionTargetResponse struct {
    ContentType string 
    InternalException *interface{} 
    InvalidAccessException *interface{} 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateActionTargetResponse map[string]interface{} 
    
}

