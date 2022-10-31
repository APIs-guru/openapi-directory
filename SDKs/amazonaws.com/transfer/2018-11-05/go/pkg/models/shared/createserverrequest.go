package shared



type CreateServerRequest struct {
    Certificate *string `json:"Certificate,omitempty"`
    Domain *DomainEnum `json:"Domain,omitempty"`
    EndpointDetails *EndpointDetails `json:"EndpointDetails,omitempty"`
    EndpointType *EndpointTypeEnum `json:"EndpointType,omitempty"`
    HostKey *string `json:"HostKey,omitempty"`
    IdentityProviderDetails *IdentityProviderDetails `json:"IdentityProviderDetails,omitempty"`
    IdentityProviderType *IdentityProviderTypeEnum `json:"IdentityProviderType,omitempty"`
    LoggingRole *string `json:"LoggingRole,omitempty"`
    Protocols []ProtocolEnum `json:"Protocols,omitempty"`
    SecurityPolicyName *string `json:"SecurityPolicyName,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    WorkflowDetails *WorkflowDetails `json:"WorkflowDetails,omitempty"`
    
}

