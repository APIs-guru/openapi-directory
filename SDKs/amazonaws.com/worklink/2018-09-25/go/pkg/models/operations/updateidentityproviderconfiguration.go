package operations

type UpdateIdentityProviderConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum string

const (
	UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnumSaml UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum = "SAML"
)

type UpdateIdentityProviderConfigurationRequestBody struct {
	FleetArn                     string                                                                 `json:"FleetArn"`
	IdentityProviderSamlMetadata *string                                                                `json:"IdentityProviderSamlMetadata"`
	IdentityProviderType         UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum `json:"IdentityProviderType"`
}

type UpdateIdentityProviderConfigurationRequest struct {
	Headers UpdateIdentityProviderConfigurationHeaders
	Request UpdateIdentityProviderConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateIdentityProviderConfigurationResponse struct {
	ContentType                                 string
	InternalServerErrorException                *interface{}
	InvalidRequestException                     *interface{}
	ResourceNotFoundException                   *interface{}
	StatusCode                                  int64
	TooManyRequestsException                    *interface{}
	UnauthorizedException                       *interface{}
	UpdateIdentityProviderConfigurationResponse map[string]interface{}
}
