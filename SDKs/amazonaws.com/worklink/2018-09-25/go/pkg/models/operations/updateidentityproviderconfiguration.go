package operations



type UpdateIdentityProviderConfigurationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum string

const (
    UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnumSaml UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum = "SAML"
)


type UpdateIdentityProviderConfigurationRequestBody struct {
    FleetArn string `json:"FleetArn"`
    IdentityProviderSamlMetadata *string `json:"IdentityProviderSamlMetadata,omitempty"`
    IdentityProviderType UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum `json:"IdentityProviderType"`
    
}

type UpdateIdentityProviderConfigurationRequest struct {
    Headers UpdateIdentityProviderConfigurationHeaders 
    Request UpdateIdentityProviderConfigurationRequestBody `request:"mediaType=application/json"`
    
}

type UpdateIdentityProviderConfigurationResponse struct {
    ContentType string 
    InternalServerErrorException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnauthorizedException *interface{} 
    UpdateIdentityProviderConfigurationResponse map[string]interface{} 
    
}

