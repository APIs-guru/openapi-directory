package shared

type DescribeIdentityProviderConfigurationResponse struct {
	IdentityProviderSamlMetadata *string                   `json:"IdentityProviderSamlMetadata,omitempty"`
	IdentityProviderType         *IdentityProviderTypeEnum `json:"IdentityProviderType,omitempty"`
	ServiceProviderSamlMetadata  *string                   `json:"ServiceProviderSamlMetadata,omitempty"`
}
