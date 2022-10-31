package operations



type DeleteSimulationApplicationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteSimulationApplicationRequestBody struct {
    Application string `json:"application"`
    ApplicationVersion *string `json:"applicationVersion,omitempty"`
    
}

type DeleteSimulationApplicationRequest struct {
    Headers DeleteSimulationApplicationHeaders 
    Request DeleteSimulationApplicationRequestBody `request:"mediaType=application/json"`
    
}

type DeleteSimulationApplicationResponse struct {
    ContentType string 
    DeleteSimulationApplicationResponse map[string]interface{} 
    InternalServerException *interface{} 
    InvalidParameterException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

