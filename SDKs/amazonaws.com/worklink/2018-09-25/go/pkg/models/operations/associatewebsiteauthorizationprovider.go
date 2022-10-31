package operations

import (
"openapi/pkg/models/shared")

type AssociateWebsiteAuthorizationProviderHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum string

const (
    AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnumSaml AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum = "SAML"
)


type AssociateWebsiteAuthorizationProviderRequestBody struct {
    AuthorizationProviderType AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum `json:"AuthorizationProviderType"`
    DomainName *string `json:"DomainName,omitempty"`
    FleetArn string `json:"FleetArn"`
    
}

type AssociateWebsiteAuthorizationProviderRequest struct {
    Headers AssociateWebsiteAuthorizationProviderHeaders 
    Request AssociateWebsiteAuthorizationProviderRequestBody `request:"mediaType=application/json"`
    
}

type AssociateWebsiteAuthorizationProviderResponse struct {
    AssociateWebsiteAuthorizationProviderResponse *shared.AssociateWebsiteAuthorizationProviderResponse 
    ContentType string 
    InternalServerErrorException *interface{} 
    InvalidRequestException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    
}

