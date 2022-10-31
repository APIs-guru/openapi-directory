package operations



type UpdateCompanyNetworkConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateCompanyNetworkConfigurationRequestBody struct {
    FleetArn string `json:"FleetArn"`
    SecurityGroupIds []string `json:"SecurityGroupIds"`
    SubnetIds []string `json:"SubnetIds"`
    VpcID string `json:"VpcId"`
    
}

type UpdateCompanyNetworkConfigurationRequest struct {
    Headers UpdateCompanyNetworkConfigurationHeaders 
    Request UpdateCompanyNetworkConfigurationRequestBody `request:"mediaType=application/json"`
    
}

type UpdateCompanyNetworkConfigurationResponse struct {
    ContentType string 
    InternalServerErrorException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    UpdateCompanyNetworkConfigurationResponse map[string]interface{} 
    
}

