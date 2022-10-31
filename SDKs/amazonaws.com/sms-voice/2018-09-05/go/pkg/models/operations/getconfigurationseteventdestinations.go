package operations

import (
"openapi/pkg/models/shared")

type GetConfigurationSetEventDestinationsPathParams struct {
    ConfigurationSetName string `pathParam:"style=simple,explode=false,name=ConfigurationSetName"`
    
}

type GetConfigurationSetEventDestinationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetConfigurationSetEventDestinationsRequest struct {
    PathParams GetConfigurationSetEventDestinationsPathParams 
    Headers GetConfigurationSetEventDestinationsHeaders 
    
}

type GetConfigurationSetEventDestinationsResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetConfigurationSetEventDestinationsResponse *shared.GetConfigurationSetEventDestinationsResponse 
    InternalServiceErrorException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

