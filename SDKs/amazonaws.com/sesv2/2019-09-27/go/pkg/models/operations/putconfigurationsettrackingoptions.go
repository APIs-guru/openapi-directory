package operations



type PutConfigurationSetTrackingOptionsPathParams struct {
    ConfigurationSetName string `pathParam:"style=simple,explode=false,name=ConfigurationSetName"`
    
}

type PutConfigurationSetTrackingOptionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PutConfigurationSetTrackingOptionsRequestBody struct {
    CustomRedirectDomain *string `json:"CustomRedirectDomain,omitempty"`
    
}

type PutConfigurationSetTrackingOptionsRequest struct {
    PathParams PutConfigurationSetTrackingOptionsPathParams 
    Headers PutConfigurationSetTrackingOptionsHeaders 
    Request PutConfigurationSetTrackingOptionsRequestBody `request:"mediaType=application/json"`
    
}

type PutConfigurationSetTrackingOptionsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    NotFoundException *interface{} 
    PutConfigurationSetTrackingOptionsResponse map[string]interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

