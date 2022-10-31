package operations



type AssociateDomainHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type AssociateDomainRequestBody struct {
    AcmCertificateArn string `json:"AcmCertificateArn"`
    DisplayName *string `json:"DisplayName,omitempty"`
    DomainName string `json:"DomainName"`
    FleetArn string `json:"FleetArn"`
    
}

type AssociateDomainRequest struct {
    Headers AssociateDomainHeaders 
    Request AssociateDomainRequestBody `request:"mediaType=application/json"`
    
}

type AssociateDomainResponse struct {
    AssociateDomainResponse map[string]interface{} 
    ContentType string 
    InternalServerErrorException *interface{} 
    InvalidRequestException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

