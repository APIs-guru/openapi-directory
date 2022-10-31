package operations



type DeleteResponsePlanHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteResponsePlanRequestBody struct {
    Arn string `json:"arn"`
    
}

type DeleteResponsePlanRequest struct {
    Headers DeleteResponsePlanHeaders 
    Request DeleteResponsePlanRequestBody `request:"mediaType=application/json"`
    
}

type DeleteResponsePlanResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DeleteResponsePlanOutput map[string]interface{} 
    InternalServerException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

