package operations



type DeleteSafetyRulePathParams struct {
    SafetyRuleArn string `pathParam:"style=simple,explode=false,name=SafetyRuleArn"`
    
}

type DeleteSafetyRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteSafetyRuleRequest struct {
    PathParams DeleteSafetyRulePathParams 
    Headers DeleteSafetyRuleHeaders 
    
}

type DeleteSafetyRuleResponse struct {
    ContentType string 
    DeleteSafetyRuleResponse map[string]interface{} 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

