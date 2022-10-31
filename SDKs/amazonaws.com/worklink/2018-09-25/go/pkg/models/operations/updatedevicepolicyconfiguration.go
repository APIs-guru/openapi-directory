package operations



type UpdateDevicePolicyConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateDevicePolicyConfigurationRequestBody struct {
    DeviceCaCertificate *string `json:"DeviceCaCertificate,omitempty"`
    FleetArn string `json:"FleetArn"`
    
}

type UpdateDevicePolicyConfigurationRequest struct {
    Headers UpdateDevicePolicyConfigurationHeaders 
    Request UpdateDevicePolicyConfigurationRequestBody `request:"mediaType=application/json"`
    
}

type UpdateDevicePolicyConfigurationResponse struct {
    ContentType string 
    InternalServerErrorException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    UpdateDevicePolicyConfigurationResponse map[string]interface{} 
    
}

