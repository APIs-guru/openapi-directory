package operations



type UpdateSecurityHubConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateSecurityHubConfigurationRequestBody struct {
    AutoEnableControls *bool `json:"AutoEnableControls,omitempty"`
    
}

type UpdateSecurityHubConfigurationRequest struct {
    Headers UpdateSecurityHubConfigurationHeaders 
    Request UpdateSecurityHubConfigurationRequestBody `request:"mediaType=application/json"`
    
}

type UpdateSecurityHubConfigurationResponse struct {
    ContentType string 
    InternalException *interface{} 
    InvalidAccessException *interface{} 
    InvalidInputException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateSecurityHubConfigurationResponse map[string]interface{} 
    
}

