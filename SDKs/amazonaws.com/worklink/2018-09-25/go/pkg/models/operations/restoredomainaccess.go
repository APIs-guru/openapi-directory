package operations



type RestoreDomainAccessHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type RestoreDomainAccessRequestBody struct {
    DomainName string `json:"DomainName"`
    FleetArn string `json:"FleetArn"`
    
}

type RestoreDomainAccessRequest struct {
    Headers RestoreDomainAccessHeaders 
    Request RestoreDomainAccessRequestBody `request:"mediaType=application/json"`
    
}

type RestoreDomainAccessResponse struct {
    ContentType string 
    InternalServerErrorException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    RestoreDomainAccessResponse map[string]interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

