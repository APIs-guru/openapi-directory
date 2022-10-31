package operations

import (
"openapi/pkg/models/shared")

type DescribeCompanyNetworkConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeCompanyNetworkConfigurationRequestBody struct {
    FleetArn string `json:"FleetArn"`
    
}

type DescribeCompanyNetworkConfigurationRequest struct {
    Headers DescribeCompanyNetworkConfigurationHeaders 
    Request DescribeCompanyNetworkConfigurationRequestBody `request:"mediaType=application/json"`
    
}

type DescribeCompanyNetworkConfigurationResponse struct {
    ContentType string 
    DescribeCompanyNetworkConfigurationResponse *shared.DescribeCompanyNetworkConfigurationResponse 
    InternalServerErrorException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

