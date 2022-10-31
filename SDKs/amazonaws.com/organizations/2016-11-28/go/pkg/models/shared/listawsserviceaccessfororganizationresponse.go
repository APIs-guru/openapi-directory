package shared



type ListAwsServiceAccessForOrganizationResponse struct {
    EnabledServicePrincipals []EnabledServicePrincipal `json:"EnabledServicePrincipals,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

