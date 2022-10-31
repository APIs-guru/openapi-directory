package operations



type DisassociateWebsiteCertificateAuthorityHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DisassociateWebsiteCertificateAuthorityRequestBody struct {
    FleetArn string `json:"FleetArn"`
    WebsiteCaID string `json:"WebsiteCaId"`
    
}

type DisassociateWebsiteCertificateAuthorityRequest struct {
    Headers DisassociateWebsiteCertificateAuthorityHeaders 
    Request DisassociateWebsiteCertificateAuthorityRequestBody `request:"mediaType=application/json"`
    
}

type DisassociateWebsiteCertificateAuthorityResponse struct {
    ContentType string 
    DisassociateWebsiteCertificateAuthorityResponse map[string]interface{} 
    InternalServerErrorException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

